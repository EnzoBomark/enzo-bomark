import { state } from './bolt';

const loaded_routes = [];
const active_route = state(null);

export const router = {
  navigate,
  init,
  route,
};

function navigate() {
  return {
    go,
    replace,
    back,
    forward,
  };
}

function init(value) {
  loaded_routes.push(...value);
  update_active_route();
}

function go(uri) {
  window.history.pushState({}, '', uri);
  update_active_route();
}

function replace(uri) {
  window.history.replaceState({}, '', uri);
  update_active_route();
}

function back() {
  window.history.back();
}

function forward() {
  window.history.forward();
}

function route() {
  return active_route;
}

function update_active_route() {
  const match = loaded_routes.find(is_route_match);

  console.log('match', match);

  if (match) {
    active_route.value = match.callback.call(this);
    return;
  }

  const fallback = loaded_routes.find(is_wildcard_route);

  if (fallback) {
    active_route.value = fallback.callback.call(this);
    return;
  }

  throw new Error('Route not found');
}

function is_route_match(route) {
  return !is_wildcard_route(route) && is_path_match(route);
}

function is_path_match(route) {
  return window.location.pathname.match(new RegExp(`^${route.uri}$`));
}

function is_wildcard_route(route) {
  return route.uri === '*';
}

window.addEventListener('popstate', update_active_route);
