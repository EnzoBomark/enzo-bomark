import { State } from './dom';

type UnArray<T> = T extends readonly (infer U)[] ? U : T;

type ExtractParam<Path extends string> = Path extends `:${infer Param}`
  ? Record<Param, string>
  : {};

type ExtractParams<Path extends string> =
  Path extends `${infer Segment}/${infer Rest}`
    ? ExtractParam<Segment> & ExtractParams<Rest>
    : ExtractParam<Path>;

export type LinkParams<
  Paths extends string,
  Path extends Paths,
> = keyof ExtractParams<Path> extends never
  ? { to: Path; query?: Record<string, string>; replace?: boolean }
  : {
      to: Path;
      params: ExtractParams<Path>;
      query?: Record<string, string>;
      replace?: boolean;
    };

declare function router<
  TRoutes extends {
    path: string;
    component: (options: {
      params: Record<string, string>;
      query: Record<string, string>;
    }) => Element;
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

export declare function createRoute<T extends string>(
  path: T
): (params: {
  component: (options: {
    params: ExtractParams<T>;
    query: Record<string, string>;
  }) => Element;
}) => {
  path: T;
  route: () => { path: T } & {
    component: (options: {
      params: ExtractParams<T>;
      query: Record<string, string>;
    }) => Element;
  };
};

declare function parsePath(props: {
  to: string;
  params?: Record<string, string>;
}): string;

declare const pathname: State<string>;

export { createRoute, parsePath, pathname, router };
