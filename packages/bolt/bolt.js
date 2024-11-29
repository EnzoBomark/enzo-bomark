let attribute_cache = Object.create(null);
let changed_states, derived_states;
let curr_deps, curr_derives;
let states_to_garbage_collect;

const always_connected_node = { isConnected: 1 };

const state_proto = {
  get value() {
    curr_deps?._getters?.add(this);
    return this._value;
  },

  get prev() {
    curr_deps?._getters?.add(this);
    return this._prev;
  },

  set value(value) {
    curr_deps?._setters?.add(this);

    if (value !== this._value) {
      this._value = value;
      update_bindings_and_listeners(this, value);
    }
  },
};

function state(initial) {
  return {
    _value: initial,
    _prev: initial,
    _bindings: [],
    _listeners: [],
    __proto__: state_proto,
  };
}

function update_bindings_and_listeners(state, value) {
  if (state._bindings.length + state._listeners.length) {
    derived_states?.add(state);
    changed_states = schedule_and_run_once(changed_states, state, update);
  } else {
    state._prev = value;
  }
}

function bind(fn, node) {
  const dependencies = { _getters: new Set(), _setters: new Set() };
  const binding = { function: fn };
  const prev_derives = curr_derives;

  curr_derives = [];

  let new_node = run_and_capture_dependencies(fn, dependencies, node);

  new_node = (new_node ?? document).nodeType ? new_node : new Text(new_node);

  dependencies._getters.forEach((dependency) => {
    if (!dependencies._setters.has(dependency)) {
      add_states_to_garbage_collector(dependency);
      dependency._bindings.push(binding);
    }
  });

  curr_derives.forEach((listener) => (listener._node = new_node));

  curr_derives = prev_derives;

  binding._node = new_node;

  return binding._node;
}

function derive(fn, state_to_derive = state(), node) {
  const dependencies = { _getters: new Set(), _setters: new Set() };
  let listener = { function: fn, state: state_to_derive };

  listener._node =
    node ?? curr_derives?.push(listener) ?? always_connected_node;

  state_to_derive.value = run_and_capture_dependencies(
    fn,
    dependencies,
    state_to_derive._value
  );

  dependencies._getters.forEach((dependency) => {
    if (!dependencies._setters.has(dependency)) {
      add_states_to_garbage_collector(dependency);
      dependency._listeners.push(listener);
    }
  });

  return state_to_derive;
}

function append(node, ...children) {
  children.flat(Infinity).forEach((child) => {
    if (child != undefined) {
      const proto_of_child = proto_of(child);

      let child_node = child;

      if (proto_of_child === state_proto) {
        child_node = bind(() => child.value);
      } else if (proto_of_child === Function.prototype) {
        child_node = bind(child);
      }

      if (child_node !== undefined) {
        node.append(child_node);
      }
    }
  });

  return node;
}

function tag(name, ...props) {
  const [attributes, ...children] = separate_attributes_and_children(props);
  const node = document.createElement(name);

  Object.entries(attributes).forEach(([key, value]) => {
    const is_event = key.startsWith('on');

    const setter = is_event
      ? get_event_listener_setter(node, key)
      : get_attribute_setter(node, key, name);

    let proto_of_value = proto_of(value);

    if (!is_event && proto_of_value === Function.prototype) {
      value = derive(value);
      proto_of_value = state_proto;
    }

    if (proto_of_value === state_proto) {
      bind(() => (setter(value.value, value._prev), node));
    } else {
      setter(value);
    }
  });

  return append(node, children);
}

function update() {
  let derived = array_from(changed_states).filter((s) => s._value !== s._prev);

  do {
    derived_states = new Set();

    const connected_listeners = derived.flatMap(
      (state) => (state._listeners = keep_connected(state._listeners))
    );

    new Set(connected_listeners).forEach((listener) => {
      derive(listener.function, listener.state, listener._node);
      listener._node = undefined;
    });
  } while ((derived = array_from(derived_states)).length);

  let changed = array_from(changed_states).filter((s) => s._value !== s._prev);

  changed_states = undefined;

  const connected_bindings = changed.flatMap(
    (state) => (state._bindings = keep_connected(state._bindings))
  );

  new Set(connected_bindings).forEach((binding) => {
    replace(binding._node, bind(binding.function, binding._node));
    binding._node = undefined;
  });

  changed.forEach((state) => (state._prev = state._value));
}

function array_from(value) {
  return Array.from(value ?? []);
}

function proto_of(value) {
  return Object.getPrototypeOf(value ?? Object.create(null));
}

function own_proto_descriptor(value, key) {
  return Object.getOwnPropertyDescriptor(value ?? Object.create(null), key);
}

function schedule_and_run_once(set, state, fn, waitMs) {
  return (set ?? (setTimeout(fn, waitMs), new Set())).add(state);
}

function replace(old, curr) {
  return curr ? curr !== old && old.replaceWith(curr) : old.remove();
}

function keep_connected(list) {
  return list.filter(({ _node }) => _node?.isConnected);
}

function separate_attributes_and_children(props) {
  return proto_of(props[0]) === Object.prototype ? props : [{}, ...props];
}

function add_states_to_garbage_collector(state) {
  states_to_garbage_collect = schedule_and_run_once(
    states_to_garbage_collect,
    state,
    garbage_collector,
    1000
  );
}

function garbage_collector() {
  states_to_garbage_collect.forEach((state) => {
    state._bindings = keep_connected(state._bindings);
    state._listeners = keep_connected(state._listeners);
  });

  states_to_garbage_collect = undefined;
}

function run_and_capture_dependencies(fn, dependencies, value) {
  let prev_deps = curr_deps;
  curr_deps = dependencies;

  try {
    return fn(value);
  } catch (error) {
    return value;
  } finally {
    curr_deps = prev_deps;
  }
}

function get_event_listener_setter(node, key) {
  return (value, old) => {
    const event = key.slice(2);
    node.removeEventListener(event, old);
    node.addEventListener(event, value);
  };
}

function get_attribute_setter(node, key, name) {
  const setter = (attribute_cache[name + ':' + key] ??= get_descriptor(
    proto_of(node),
    key
  )?.set);

  return setter?.bind(node) ?? node.setAttribute.bind(node, key);
}

function get_descriptor(proto, key) {
  return proto
    ? (own_proto_descriptor(proto, key) ?? get_descriptor(proto_of(proto)))
    : undefined;
}

const factory = () => ({ get: (_, name) => tag.bind(null, name) });

const html = new Proxy(() => new Proxy(tag, factory()), factory());

export { html, append, state, derive };
