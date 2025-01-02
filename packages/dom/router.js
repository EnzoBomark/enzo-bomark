import { state } from './dom';

const loadedRoutes = [];
const activeRoute = state(null);
export const pathname = state(window.location.pathname);

export function parsePath(options) {
  const path = options.params
    ? options.to.replace(/:\w+/g, (match) => options.params[match.slice(1)])
    : options.to;

  if (!options.query) {
    return path;
  }

  const query = Object.entries(options.query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return `${path}?${query}`;
}

export function createRoute(path) {
  return function (params) {
    return {
      path,
      route: () => ({ path, ...params }),
    };
  };
}

export function router(value) {
  loadedRoutes.push(...value);
  updateActiveRoute();
  return { route: activeRoute };
}

router.navigate = function () {
  return {
    go,
    back,
    forward,
  };
};

function go(options) {
  if (parsePath(options) === window.location.pathname) {
    return;
  }

  if (options.replace) {
    window.history.replaceState({}, '', parsePath(options));
  } else {
    window.history.pushState({}, '', parsePath(options));
  }

  updateActiveRoute();
  window.scrollTo(0, 0);
}

function back() {
  window.history.back();
}

function forward() {
  window.history.forward();
}

function updateActiveRoute() {
  pathname.value = window.location.pathname;

  const match = loadedRoutes.find(isRouteMatch);

  if (match) {
    activeRoute.value = match.component.call(this, {
      params: getCurrentParams(match),
      query: getCurrentQuery(),
    });

    return;
  }

  const fallback = loadedRoutes.find(isWildcardRoute);

  if (fallback) {
    activeRoute.value = fallback.component.call(this);
    return;
  }

  throw new Error('Route not found');
}

function isRouteMatch(route) {
  return !isWildcardRoute(route) && isPathMatch(route);
}

function isPathMatch(route) {
  const cleanRoutePath = route.path.split('/').slice(1);
  const cleanCurrentPath = window.location.pathname
    .split('?')[0]
    .split('/')
    .slice(1);

  return cleanRoutePath.every((path, index) => {
    if (path === cleanCurrentPath[index]) {
      return true;
    }

    if (path.startsWith(':')) {
      return true;
    }

    return false;
  });
}

function isWildcardRoute(route) {
  return route.path === '*';
}

function getCurrentParams(route) {
  const cleanRoutePath = route.path.split('/').slice(1);
  const cleanCurrentPath = window.location.pathname.split('/').slice(1);

  return cleanRoutePath.reduce((acc, path, index) => {
    if (path.startsWith(':')) {
      acc[path.slice(1)] = cleanCurrentPath[index];
    }

    return acc;
  }, {});
}

function getCurrentQuery() {
  return window.location.search
    .slice(1)
    .split('&')
    .reduce((acc, query) => {
      const [key, value] = query.split('=');
      acc[key] = value;
      return acc;
    }, {});
}

window.addEventListener('popstate', updateActiveRoute);
