import { state } from './bolt';

let routes = [];
const active_route = state(null);

function load() {
  for (const route of routes) {
    if (route.uri === '*') {
      continue;
    }

    const regEx = new RegExp(`^${route.uri}$`);

    if (window.location.pathname.match(regEx)) {
      active_route.value = route.callback.call(this);
      return;
    }
  }

  routes.forEach((route) => {
    if (route.uri === '*') {
      active_route.value = route.callback.call(this);
    }
  });

  throw new Error('Route not found');
}

export function router(load_routes = []) {
  routes = load_routes;
  load();

  return { route: active_route };
}

router.go = function go(uri) {
  window.history.pushState({}, '', uri);
  load();
};

router.replace = function replace(uri) {
  window.history.replaceState({}, '', uri);
  load();
};

router.back = function back() {
  window.history.back();
};

router.forward = function forward() {
  window.history.forward();
};

window.addEventListener('popstate', load);
