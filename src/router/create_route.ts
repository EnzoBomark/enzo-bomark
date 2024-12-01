export function create_route<T extends string>(path: T) {
  return function (params: { readonly component: () => Element }) {
    return {
      path,
      route: () => ({ path, ...params }),
    };
  };
}
