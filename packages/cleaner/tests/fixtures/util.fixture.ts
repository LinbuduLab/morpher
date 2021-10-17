import fs from "fs";

function deco1(): ClassDecorator {
  return () => {};
}

@deco1()
export class Foo {
  prop1: string;

  method1() {}
}

export type TT = string;

export const foo = "foo";

export interface IIn {}
