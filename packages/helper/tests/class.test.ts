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
  getClassPropDecorators,
  getClassMethodDecorators,
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
    expect(getClassDecorators(source, "Foo", "classDeco")).toBeDefined();
    expect(getClassDecorators(source, "Fo1")).toEqual([]);
    expect(getClassDecorators(source, "Bar").length).toBe(0);

    expect(getClassMethodDeclarations(source, "Foo")!.length).toBe(5);
    expect(getClassMethodDeclarations(source, "Foo1")).toEqual([]);
    expect(getClassMethodDeclarations(source, "Foo", "method1")).toBeDefined();
    expect(
      getClassMethodDeclarations(source, "Foo", "method599")
    ).toBeUndefined();

    expect(getClassPropDeclarations(source, "Foo").length).toBe(5);
    expect(getClassPropDeclarations(source, "Fo1")).toEqual([]);
    expect(getClassPropDeclarations(source, "Foo", "prop1")).toBeDefined();
    expect(getClassPropDeclarations(source, "Foo", "prop599")).toBeUndefined();

    expect(getClassPropDecorators(source, "Foo", "prop1").length).toBe(1);
    expect(getClassPropDecorators(source, "Foo", "prop1")[0].getName()).toBe(
      "propDeco"
    );
    expect(getClassPropDecorators(source, "Foo", "prop2")).toEqual([]);
    expect(
      getClassPropDecorators(source, "Foo", "prop1", "propDeco")
    ).toBeDefined();

    expect(getClassMethodDecorators(source, "Foo", "method1").length).toBe(1);
    expect(
      getClassMethodDecorators(source, "Foo", "method1")[0].getName()
    ).toBe("methodDeco");
    expect(getClassMethodDecorators(source, "Foo", "method2")).toEqual([]);
    expect(
      getClassMethodDecorators(source, "Foo", "method1", "methodDeco")
    ).toBeDefined();
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

    expect(getClassMethodModifiers(source, "Foo", "method599")).toEqual([]);

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
    expect(getClassPropModifiers(source, "Foo", "prop599")).toEqual([]);
  });

  it("should skip when declarations inexist", () => {
    expect(getClassMethodIdentifiers(source, "Foo111")).toEqual([]);
    expect(getClassPropIdentifiers(source, "Foo111")).toEqual([]);
    expect(getClassDecoratorIdentifiers(source, "Foo111")).toEqual([]);
  });

  it("should return empty", () => {
    expect(
      getClassMethodDeclarations(source, "Foo1", "Method111")
    ).toBeUndefined();

    expect(getClassMethodDeclarations(source, "Foo1")).toEqual([]);

    expect(getClassMethodIdentifiers(source, "Foo1")).toEqual([]);
    expect(getClassMethodModifiers(source, "Foo1", "Method111")).toEqual([]);
    expect(getClassMethodModifiers(source, "Foo", "Method111")).toEqual([]);

    expect(
      getClassPropDeclarations(source, "Foo1", "Prop1111")
    ).toBeUndefined();

    expect(getClassPropDeclarations(source, "Foo1")).toEqual([]);
    expect(getClassPropIdentifiers(source, "Foo1")).toEqual([]);
    expect(getClassPropModifiers(source, "Foo1", "Prop111")).toEqual([]);
    expect(getClassPropModifiers(source, "Foo", "Prop111")).toEqual([]);

    expect(getClassDecoratorIdentifiers(source, "Foo1")).toEqual([]);

    expect(getClassDecorators(source, "Foo1")).toEqual([]);
    expect(getClassDecorators(source, "Foo1", "Deco11")).toBeUndefined();

    expect(
      getClassPropDecorators(source, "Foo1", "prop1", "deco1")
    ).toBeUndefined();
    expect(
      getClassPropDecorators(source, "Foo", "prop1111", "deco1")
    ).toBeUndefined();
    expect(getClassPropDecorators(source, "Foo1", "prop")).toEqual([]);
    expect(getClassPropDecorators(source, "Foo1", "prop111")).toEqual([]);
    expect(
      getClassPropDecorators(source, "Foo1", "prop1", "deco1111")
    ).toBeUndefined();

    expect(
      getClassMethodDecorators(source, "Foo1", "method1", "deco1")
    ).toBeUndefined();

    expect(getClassMethodDecorators(source, "Foo", "method111")).toEqual([]);
    expect(getClassMethodDecorators(source, "Foo1", "method111")).toEqual([]);
    expect(
      getClassMethodDecorators(source, "Foo1", "method111", "deco111")
    ).toBeUndefined();
    expect(
      getClassMethodDecorators(source, "Foo", "method111", "deco1111")
    ).toBeUndefined();
  });
});
