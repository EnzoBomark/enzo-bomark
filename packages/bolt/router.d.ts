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
  T extends readonly {
    path: string;
    component: () => Element;
  }[],
>(
  routes: T
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

declare function parse_path(props: {
  to: string;
  params?: Record<string, string>;
}): string;

export { router, parse_path };
