import { Project } from "ts-morph";
import path from "path";
import {
  checkClassExistInSourceFile,
  checkClassHasDecorators,
  checkClassHasMethods,
  checkClassHasProps,
  checkDecoratorExistInClass,
  checkIsDecoratorFactory,
  checkMethodExistInClass,
  checkPropExistInClass,
  checkSourceFileHasClass,
} from "../src/class";
import {} from "@ts-morpher/helper";
import {} from "@ts-morpher/types";

const source = new Project().addSourceFileAtPath(
  path.resolve(__dirname, "./fixtures/class.fixture.ts")
);

const source2 = new Project().addSourceFileAtPath(
  path.resolve(__dirname, "./fixtures/empty.fixture.ts")
);

describe("packages/checker-class", () => {
  it("should check class declarations", () => {
    expect(checkSourceFileHasClass(source)).toBeTruthy();
    expect(checkSourceFileHasClass(source2)).toBeFalsy();

    expect(checkClassExistInSourceFile(source, "Foo")).toBeTruthy();
    expect(checkClassExistInSourceFile(source, "Foo1")).toBeFalsy();
    expect(checkClassExistInSourceFile(source2, "Foo")).toBeFalsy();

    expect(checkClassHasMethods(source, "Foo")).toBeTruthy();
    expect(checkClassHasMethods(source, "Foo1")).toBeFalsy();
    expect(checkClassHasMethods(source2, "Foo")).toBeFalsy();

    expect(checkClassHasProps(source, "Foo")).toBeTruthy();
    expect(checkClassHasProps(source, "Foo1")).toBeFalsy();
    expect(checkClassHasProps(source2, "Foo")).toBeFalsy();

    expect(checkClassHasDecorators(source, "Foo")).toBeTruthy();
    expect(checkClassHasDecorators(source, "Foo1")).toBeFalsy();
    expect(checkClassHasDecorators(source2, "Foo")).toBeFalsy();
  });
  it("should check method declarations", () => {
    expect(checkMethodExistInClass(source, "Foo", "method599")).toBeFalsy();
    expect(checkMethodExistInClass(source, "Foo", "method1")).toBeTruthy();
    expect(checkMethodExistInClass(source, "Foo1", "method599")).toBeFalsy();
    expect(checkMethodExistInClass(source, "Foo1", "method1")).toBeFalsy();
  });
  it("should check prop declarations", () => {
    expect(checkPropExistInClass(source, "Foo", "prop599")).toBeFalsy();
    expect(checkPropExistInClass(source, "Foo", "prop1")).toBeTruthy();
    expect(checkPropExistInClass(source, "Foo1", "prop599")).toBeFalsy();
    expect(checkPropExistInClass(source, "Foo1", "prop1")).toBeFalsy();
  });
  it("should check decorator declarations", () => {
    expect(checkDecoratorExistInClass(source, "Foo", "deco599")).toBeFalsy();
    expect(checkDecoratorExistInClass(source, "Foo", "classDeco")).toBeTruthy();
    expect(checkDecoratorExistInClass(source, "Foo1", "deco599")).toBeFalsy();
    expect(checkDecoratorExistInClass(source, "Foo1", "classDeco")).toBeFalsy();

    expect(checkIsDecoratorFactory(source, "Foo", "classDeco")).toBeTruthy();
    expect(
      checkIsDecoratorFactory(source, "Foo", "nonFactoryDeco")
    ).toBeFalsy();
    expect(checkIsDecoratorFactory(source, "Foo", "nonExistDeco")).toBeFalsy();
  });
});
