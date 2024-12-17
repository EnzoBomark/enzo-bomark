let attributeCache = Object.create(null);
let changedStates, derivedStates;
let currDeps, currDerives;
let statesToGarbageCollect;

const alwaysConnectedNode = { isConnected: 1 };

const stateProto = {
  get value() {
    currDeps?._getters?.add(this);
    return this._value;
  },

  get prev() {
    currDeps?._getters?.add(this);
    return this._prev;
  },

  set value(value) {
    currDeps?._setters?.add(this);

    if (value !== this._value) {
      this._value = value;
      updateBindingsAndListeners(this, value);
    }
  },
};

function state(initial) {
  return {
    _value: initial,
    _prev: initial,
    _bindings: [],
    _listeners: [],
    __proto__: stateProto,
  };
}

function updateBindingsAndListeners(state, value) {
  if (state._bindings.length + state._listeners.length) {
    derivedStates?.add(state);
    changedStates = scheduleAndRunOnce(changedStates, state, update);
  } else {
    state._prev = value;
  }
}

function bind(fn, node) {
  const dependencies = { _getters: new Set(), _setters: new Set() };
  const binding = { function: fn };
  const prevDerives = currDerives;

  currDerives = [];

  let newNode = runAndCaptureDependencies(fn, dependencies, node);

  newNode = (newNode ?? document).nodeType ? newNode : new Text(newNode);

  dependencies._getters.forEach((dependency) => {
    if (!dependencies._setters.has(dependency)) {
      addStatesToGarbageCollector(dependency);
      dependency._bindings.push(binding);
    }
  });

  currDerives.forEach((listener) => (listener._node = newNode));

  currDerives = prevDerives;

  binding._node = newNode;

  return binding._node;
}

function derive(fn, stateToDerive = state(), node) {
  const dependencies = { _getters: new Set(), _setters: new Set() };
  let listener = { function: fn, state: stateToDerive };

  listener._node = node ?? currDerives?.push(listener) ?? alwaysConnectedNode;

  stateToDerive.value = runAndCaptureDependencies(
    fn,
    dependencies,
    stateToDerive._value
  );

  dependencies._getters.forEach((dependency) => {
    if (!dependencies._setters.has(dependency)) {
      addStatesToGarbageCollector(dependency);
      dependency._listeners.push(listener);
    }
  });

  return stateToDerive;
}

function append(node, ...children) {
  children.flat(Infinity).forEach((child) => {
    if (child != undefined) {
      const protoOfChild = protoOf(child);

      let childNode = child;

      if (protoOfChild === stateProto) {
        childNode = bind(() => child.value);
      } else if (protoOfChild === Function.prototype) {
        childNode = bind(child);
      }

      if (childNode !== undefined) {
        node.append(childNode);
      }
    }
  });

  return node;
}

function tag(namespace, name, ...props) {
  const [attributes, ...children] = separateAttributesAndChildren(props);
  const node = namespace
    ? document.createElementNS(namespace, name)
    : document.createElement(name);

  Object.entries(attributes).forEach(([key, value]) => {
    const isEvent = key.startsWith('on');

    const setter = isEvent
      ? getEventListenerSetter(node, key)
      : getAttributeSetter(node, key, name);

    let protoOfValue = protoOf(value);

    if (!isEvent && protoOfValue === Function.prototype) {
      value = derive(value);
      protoOfValue = stateProto;
    }

    if (protoOfValue === stateProto) {
      bind(() => (setter(value.value, value._prev), node));
    } else {
      setter(value);
    }
  });

  return append(node, children);
}

function update() {
  let derived = arrayFrom(changedStates).filter((s) => s._value !== s._prev);

  do {
    derivedStates = new Set();

    const connectedListeners = derived.flatMap(
      (state) => (state._listeners = keepConnected(state._listeners))
    );

    new Set(connectedListeners).forEach((listener) => {
      derive(listener.function, listener.state, listener._node);
      listener._node = undefined;
    });
  } while ((derived = arrayFrom(derivedStates)).length);

  let changed = arrayFrom(changedStates).filter((s) => s._value !== s._prev);

  changedStates = undefined;

  const connectedBindings = changed.flatMap(
    (state) => (state._bindings = keepConnected(state._bindings))
  );

  new Set(connectedBindings).forEach((binding) => {
    replace(binding._node, bind(binding.function, binding._node));
    binding._node = undefined;
  });

  changed.forEach((state) => (state._prev = state._value));
}

function arrayFrom(value) {
  return Array.from(value ?? []);
}

function protoOf(value) {
  return Object.getPrototypeOf(value ?? Object.create(null));
}

function ownProtoDescriptor(value, key) {
  return Object.getOwnPropertyDescriptor(value ?? Object.create(null), key);
}

function scheduleAndRunOnce(set, state, fn, waitMs) {
  return (set ?? (setTimeout(fn, waitMs), new Set())).add(state);
}

function replace(old, curr) {
  return curr ? curr !== old && old.replaceWith(curr) : old.remove();
}

function keepConnected(list) {
  return list.filter(({ _node }) => _node?.isConnected);
}

function separateAttributesAndChildren(props) {
  return protoOf(props[0]) === Object.prototype ? props : [{}, ...props];
}

function addStatesToGarbageCollector(state) {
  statesToGarbageCollect = scheduleAndRunOnce(
    statesToGarbageCollect,
    state,
    garbageCollector,
    1000
  );
}

function garbageCollector() {
  statesToGarbageCollect.forEach((state) => {
    state._bindings = keepConnected(state._bindings);
    state._listeners = keepConnected(state._listeners);
  });

  statesToGarbageCollect = undefined;
}

function runAndCaptureDependencies(fn, dependencies, value) {
  let prevDeps = currDeps;
  currDeps = dependencies;

  try {
    return fn(value);
  } catch (error) {
    return value;
  } finally {
    currDeps = prevDeps;
  }
}

function getEventListenerSetter(node, key) {
  return (value, old) => {
    const event = key.slice(2);
    node.removeEventListener(event, old);
    node.addEventListener(event, value);
  };
}

function getAttributeSetter(node, key, name) {
  const setter = (attributeCache[name + ':' + key] ??= getDescriptor(
    protoOf(node),
    key
  )?.set);

  return setter?.bind(node) ?? node.setAttribute.bind(node, key);
}

function getDescriptor(proto, key) {
  return proto
    ? (ownProtoDescriptor(proto, key) ?? getDescriptor(protoOf(proto)))
    : undefined;
}

const factory = (namespace) => ({
  get: (_, name) => tag.bind(null, namespace, name),
});

const html = new Proxy(
  (namespace) => new Proxy(tag, factory(namespace)),
  factory()
);

function appendHtmlString(node, string) {
  node.innerHTML = string;
  return node;
}

export { append, appendHtmlString, derive, html, state };
