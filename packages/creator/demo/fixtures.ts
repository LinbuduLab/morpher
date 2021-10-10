export type Foo<T extends string = "default_string_literal"> = Record<
  T,
  unknown
>;
