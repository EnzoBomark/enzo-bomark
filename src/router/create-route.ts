export function create_route<
  TUri extends string,
  TRoute extends {
    readonly uri: TUri;
    readonly callback: () => Element;
  },
>(routes: TRoute) {
  return routes;
}
