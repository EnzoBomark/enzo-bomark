import { state } from './bolt';

const loaded_routes = [];
const active_route = state(null);

export function parse_path(options) {
  return options.params
    ? options.to.replace(/:\w+/g, (match) => options.params[match.slice(1)])
    : options.to;
}

export function create_route(path) {
  return function (params) {
    return {
      path,
      route: () => ({ path, ...params }),
    };
  };
}

export function router(value) {
  loaded_routes.push(...value);
  update_active_route();
  return { route: active_route };
}

router.navigate = function () {
  return {
    go,
    back,
    forward,
    parse_path,
  };
};

function go(options) {
  if (options.replace) {
    window.history.replaceState({}, '', parse_path(options));
  } else {
    window.history.pushState({}, '', parse_path(options));
  }

  update_active_route();
}

function back() {
  window.history.back();
}

function forward() {
  window.history.forward();
}

function update_active_route() {
  const match = loaded_routes.find(is_route_match);

  if (match) {
    active_route.value = match.component.call(this, {
      params: get_current_params(match),
      query: get_current_query(),
    });

    return;
  }

  const fallback = loaded_routes.find(is_wildcard_route);

  if (fallback) {
    active_route.value = fallback.component.call(this);
    return;
  }

  throw new Error('Route not found');
}

function is_route_match(route) {
  return !is_wildcard_route(route) && is_path_match(route);
}

function is_path_match(route) {
  const clean_route_path = route.path.split('/').slice(1);
  const clean_current_path = window.location.pathname
    .split('?')[0]
    .split('/')
    .slice(1);

  return clean_route_path.every((path, index) => {
    if (path === clean_current_path[index]) {
      return true;
    }

    if (path.startsWith(':')) {
      return true;
    }

    return false;
  });
}

function is_wildcard_route(route) {
  return route.path === '*';
}

function get_current_params(route) {
  const clean_route_path = route.path.split('/').slice(1);
  const clean_current_path = window.location.pathname.split('/').slice(1);

  return clean_route_path.reduce((acc, path, index) => {
    if (path.startsWith(':')) {
      acc[path.slice(1)] = clean_current_path[index];
    }

    return acc;
  }, {});
}

function get_current_query() {
  return window.location.search
    .slice(1)
    .split('&')
    .reduce((acc, query) => {
      const [key, value] = query.split('=');
      acc[key] = value;
      return acc;
    }, {});
}

window.addEventListener('popstate', update_active_route);
