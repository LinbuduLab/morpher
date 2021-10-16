import { Project } from "ts-morph";
import path from "path";
import {
  getClassDeclarations,
  getClassDecoratorIdentifiers,
  getClassDecorators,
  getClassIdentifiers,
  getClassMethodDeclarations,
  getClassMethodIdentifiers,
  getClassMethodModifiers,
  getClassPropDeclarations,
  getClassPropIdentifiers,
  getClassPropModifiers,
} from "../src/class";

const source = new Project().addSourceFileAtPath(
  path.resolve(__dirname, "./fixtures/class.fixture.ts")
);

describe("package/helper-class", () => {
  it("should return declarations", () => {
    expect(getClassDeclarations(source).length).toBe(2);
    expect(getClassDeclarations(source, "Foo")).toBeDefined();
    expect(getClassDeclarations(source, "Bar")).toBeDefined();
    expect(getClassDeclarations(source, "Foo1")).toBeUndefined();

    expect(getClassDecorators(source, "Foo").length).toBe(1);
    expect(getClassDecorators(source, "Fo1")).toBeUndefined();
    expect(getClassDecorators(source, "Bar").length).toBe(0);

    expect(getClassMethodDeclarations(source, "Foo")!.length).toBe(5);
    expect(getClassMethodDeclarations(source, "Foo1")).toBeUndefined();
    expect(getClassMethodDeclarations(source, "Foo", "method1")).toBeDefined();
    expect(
      getClassMethodDeclarations(source, "Foo", "method599")
    ).toBeUndefined();

    expect(getClassPropDeclarations(source, "Foo").length).toBe(5);
    expect(getClassPropDeclarations(source, "Fo1")).toBeUndefined();
    expect(getClassPropDeclarations(source, "Foo", "prop1")).toBeDefined();
    expect(getClassPropDeclarations(source, "Foo", "prop599")).toBeUndefined();
  });

  it("should return identifiers", () => {
    expect(getClassIdentifiers(source).sort()).toEqual(["Foo", "Bar"].sort());
    expect(getClassMethodIdentifiers(source, "Foo")!.sort()).toEqual(
      ["method1", "method2", "method3", "method4", "method5"].sort()
    );
    expect(getClassPropIdentifiers(source, "Foo")!.sort()).toEqual(
      ["prop1", "prop2", "prop3", "prop4", "prop5"].sort()
    );
    expect(getClassDecoratorIdentifiers(source, "Foo")!.sort()).toEqual(
      ["classDeco"].sort()
    );
  });

  it("should return modifiers", () => {
    expect(getClassMethodModifiers(source, "Foo", "method1")!.sort()).toEqual(
      ["public"].sort()
    );
    expect(getClassMethodModifiers(source, "Foo", "method2")!.sort()).toEqual(
      ["private", "async"].sort()
    );
    expect(getClassMethodModifiers(source, "Foo", "method3")!.sort()).toEqual(
      ["protected", "async"].sort()
    );
    expect(getClassMethodModifiers(source, "Foo", "method4")!.sort()).toEqual([
      "static",
    ]);
    expect(getClassMethodModifiers(source, "Foo", "method5")!.sort()).toEqual(
      []
    );

    expect(getClassMethodModifiers(source, "Foo", "method599")).toBeUndefined();

    expect(getClassPropModifiers(source, "Foo", "prop1")!.sort()).toEqual([]);
    expect(getClassPropModifiers(source, "Foo", "prop2")!.sort()).toEqual(
      ["static"].sort()
    );
    expect(getClassPropModifiers(source, "Foo", "prop3")!.sort()).toEqual(
      ["private", "readonly"].sort()
    );
    expect(getClassPropModifiers(source, "Foo", "prop4")!.sort()).toEqual(
      ["public"].sort()
    );
    expect(getClassPropModifiers(source, "Foo", "prop5")!.sort()).toEqual(
      ["protected"].sort()
    );
    expect(getClassPropModifiers(source, "Foo", "prop599")).toBeUndefined();
  });

  it("should skip when declarations inexist", () => {
    expect(getClassMethodIdentifiers(source, "Foo111")).toBeUndefined();
    expect(getClassPropIdentifiers(source, "Foo111")).toBeUndefined();
    expect(getClassDecoratorIdentifiers(source, "Foo111")).toBeUndefined();
  });
});
