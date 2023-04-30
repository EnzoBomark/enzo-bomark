export {};

declare global {
  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  type XOR<T, U> = T | U extends object
    ? (Without<T, U> & U) | (Without<U, T> & T)
    : T | U;

  type NonUndefined<A> = A extends undefined ? never : A;

  type DeepRequired<T> = T extends (...args: unknown[]) => unknown
    ? T
    : T extends unknown[]
    ? DeepRequiredArray<T[number]>
    : T extends object
    ? DeepRequiredObject<T>
    : T;

  type DeepRequiredArray<T> = Array<DeepRequired<NonUndefined<T>>>;

  type DeepRequiredObject<T> = {
    [P in keyof T]-?: DeepRequired<NonUndefined<T[P]>>;
  };
}
