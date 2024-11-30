export interface State<T> {
  value: T;
  readonly prev: T;
  readonly raw_value: T;
}

export type StateView<T> = Readonly<State<T>>;

export type Primitive = string | number | boolean | bigint;

export type PropValue = Primitive | ((e: any) => void) | null;

export type Derived<T> = T | (() => T);

export type PropValueOrDerived = Derived<PropValue> | StateView<PropValue>;

export type Props = Record<`data-${string}`, PropValueOrDerived> & {
  class?: PropValueOrDerived;
};

export type PropsWithKnownKeys<ElementType> = Partial<{
  [K in keyof ElementType]: PropValueOrDerived;
}>;

export type ValidChildDomValue = Primitive | Node | null | undefined;

export type BindingFunc =
  | ((dom?: Node) => ValidChildDomValue)
  | ((dom?: Element) => Element);

export type ChildDom =
  | ValidChildDomValue
  | StateView<Primitive | null | undefined>
  | BindingFunc
  | readonly ChildDom[];

export type TagFunc<Result> = (
  first?: (Props & PropsWithKnownKeys<Result>) | ChildDom,
  ...rest: readonly ChildDom[]
) => Result;

type Tags = {
  [K in keyof HTMLElementTagNameMap]: TagFunc<HTMLElementTagNameMap[K]>;
};

declare const html: Tags;

declare function state<T>(): State<T | undefined>;
declare function state<T>(inital: T): State<T>;

declare function derive<T>(fn: () => T): State<T>;

declare function append(
  node: Element,
  ...children: readonly ChildDom[]
): Element;

type Route = readonly {
  readonly uri: string;
  readonly callback: () => Element;
};

declare const router: {
  navigate: <
    T extends readonly {
      readonly uri: string;
      readonly callback: () => Element;
    }[],
  >() => {
    go: (uri: T[number]['uri']) => void;
    replace: (uri: T[number]['uri']) => void;
    back: () => void;
    forward: () => void;
  };
  init: <
    T extends readonly {
      readonly uri: string;
      readonly callback: () => Element;
    }[],
  >(
    routes: T
  ) => void;
  route: () => State<Element>;
};

export { html, append, state, derive, router };
