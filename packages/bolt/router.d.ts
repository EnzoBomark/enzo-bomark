import { State, TagFunc, Tags } from './bolt';

type UnArray<T> = T extends readonly (infer U)[] ? U : T;

type ExtractParam<Path extends string> = Path extends `:${infer Param}`
  ? Record<Param, string>
  : {};

export type ExtractParams<Path extends string> =
  Path extends `${infer Segment}/${infer Rest}`
    ? ExtractParam<Segment> & ExtractParams<Rest>
    : ExtractParam<Path>;

export type LinkParams<
  Paths extends string,
  Path extends Paths,
> = keyof ExtractParams<Path> extends never
  ? { to: Path; replace?: boolean }
  : { to: Path; params: ExtractParams<Path>; replace?: boolean };

declare function router<
  TRoutes extends {
    path: string;
    component: (options: { params: Record<string, string> }) => Element;
  },
>(
  routes: TPaths
): {
  route: State<Element>;
};

declare namespace router {
  function navigate<T extends string>(): {
    go: <Path extends T>(options: LinkParams<T, Path>) => void;
    back: () => void;
    forward: () => void;
  };
}

export declare function create_route<T extends string>(
  path: T
): (params: {
  readonly component: (options: { params: ExtractParams<T> }) => Element;
}) => {
  path: T;
  route: () => { path: T } & {
    readonly component: (options: { params: ExtractParams<T> }) => Element;
  };
};

declare function parse_path(props: {
  to: string;
  params?: Record<string, string>;
}): string;

export { router, create_route, parse_path };
