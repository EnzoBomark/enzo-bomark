import { state } from './bolt';

const loaded_routes = [];
const active_route = state(null);

export function parse_path(options) {
  return options.params
    ? options.to.replace(/:\w+/g, (match) => options.params[match.slice(1)])
    : options.to;
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
    window.history.replaceState({}, '', options.to);
  } else {
    window.history.pushState({}, '', options.to);
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
    active_route.value = match.component.call(this);
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
  const path = window.location.pathname;
  return path.match(new RegExp(`^${route.path}$`));
}

function is_wildcard_route(route) {
  return route.path === '*';
}

window.addEventListener('popstate', update_active_route);
