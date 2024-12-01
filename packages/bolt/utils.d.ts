// Utility type that splits a string by a given delimiter
type Split<
  S extends string,
  D extends string,
> = S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];

// Utility type that gets a nested key from an object
type Get<T, K extends readonly string[]> = K extends [infer F, ...infer R]
  ? F extends keyof T
    ? R extends string[]
      ? Get<T[F], R>
      : never
    : never
  : T;

/**
 * Utility type that parses a dot notation string and returns the nested value
 *
 * @example
 * type Example = {
 *   foo: {
 *     bar: {
 *       baz: string;
 *     };
 *   };
 *   qux: string;
 * };
 *
 * type Value = ExtractNestedPathType<Example, 'foo.bar'>; //{ baz: string; }
 */
export type ExtractTypeFromPath<
  TObject,
  TPath extends string,
  TSeparator extends string = '.',
> = Get<TObject, Split<TPath, TSeparator>>;

/**
 * Utility type that gets all nested keys of an object
 *
 * @example
 * type Example = {
 *   foo: {
 *     bar: {
 *       baz: string;
 *     };
 *   };
 *   qux: string;
 * };
 *
 * type Keys = NestedKeyOf<Example>; //'foo' | 'foo.bar' | 'foo.bar.baz' | 'qux'
 */
export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];
