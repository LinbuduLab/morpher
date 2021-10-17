import { Project, SourceFile } from "ts-morph";
import path from "path";
import fs from "fs-extra";
import {
  checkClassExistInSourceFile,
  checkDecoratorExistInClass,
  checkPropExistInClass,
  checkMethodExistInClass,
} from "@ts-morpher/checker";

import {
  removeClass,
  removeClassDecorator,
  removeClassMethod,
  removeClassProp,
} from "../src/class";

const p = new Project();

let source: SourceFile;

let source2: SourceFile;

const savedContent = fs.readFileSync(
  path.resolve(__dirname, "./fixtures/class.fixture.ts")
);

const savedContent2 = fs.readFileSync(
  path.resolve(__dirname, "./fixtures/empty.fixture.ts")
);

beforeEach(() => {
  source && p.removeSourceFile(source);
  source && p.removeSourceFile(source2);

  source = p.addSourceFileAtPath(
    path.resolve(__dirname, "./fixtures/class.fixture.ts")
  );

  source2 = p.addSourceFileAtPath(
    path.resolve(__dirname, "./fixtures/empty.fixture.ts")
  );
});

afterEach(() => {
  fs.writeFileSync(
    path.resolve(__dirname, "./fixtures/class.fixture.ts"),
    savedContent
  );

  fs.writeFileSync(
    path.resolve(__dirname, "./fixtures/empty.fixture.ts"),
    savedContent2
  );
});

describe("package/cleaner-class", () => {
  it("should remove class declarations", () => {
    expect(checkClassExistInSourceFile(source, "Foo")).toBeTruthy();
    removeClass(source, "Foo");
    expect(checkClassExistInSourceFile(source, "Foo")).toBeFalsy();

    expect(checkClassExistInSourceFile(source2, "Foo")).toBeFalsy();
    removeClass(source2, "Foo");
    expect(checkClassExistInSourceFile(source2, "Foo")).toBeFalsy();
  });
  it("should remove class method declarations", () => {
    expect(checkMethodExistInClass(source, "Foo", "method1")).toBeTruthy();
    removeClassMethod(source, "Foo", "method1");
    expect(checkMethodExistInClass(source, "Foo", "method1")).toBeFalsy();

    expect(checkMethodExistInClass(source, "Foo", "method599")).toBeFalsy();
    removeClassMethod(source, "Foo", "method599");
    expect(checkMethodExistInClass(source, "Foo", "method1")).toBeFalsy();

    expect(checkMethodExistInClass(source2, "Foo", "method599")).toBeFalsy();
    removeClassMethod(source2, "Foo", "method599");
    expect(checkMethodExistInClass(source2, "Foo", "method599")).toBeFalsy();
  });
  it("should remove class prop declarations", () => {
    expect(checkPropExistInClass(source, "Foo", "prop1")).toBeTruthy();
    removeClassProp(source, "Foo", "prop1");
    expect(checkPropExistInClass(source, "Foo", "prop1")).toBeFalsy();

    expect(checkPropExistInClass(source, "Foo", "prop111")).toBeFalsy();
    removeClassProp(source, "Foo", "prop111");
    expect(checkPropExistInClass(source, "Foo", "prop111")).toBeFalsy();

    expect(checkPropExistInClass(source2, "Foo", "prop111")).toBeFalsy();
    removeClassProp(source2, "Foo", "prop111");
    expect(checkPropExistInClass(source2, "Foo", "prop111")).toBeFalsy();
  });
  it("should remove class decorator declarations", () => {
    expect(checkDecoratorExistInClass(source, "Foo", "classDeco")).toBeTruthy();
    removeClassDecorator(source, "Foo", "classDeco");
    expect(checkDecoratorExistInClass(source, "Foo", "classDeco")).toBeFalsy();

    expect(
      checkDecoratorExistInClass(source, "Foo", "classDeco111")
    ).toBeFalsy();
    removeClassDecorator(source, "Foo", "classDeco111");
    expect(
      checkDecoratorExistInClass(source, "Foo", "classDeco111")
    ).toBeFalsy();

    expect(
      checkDecoratorExistInClass(source2, "Foo", "classDeco111")
    ).toBeFalsy();
    removeClassDecorator(source2, "Foo", "classDeco111");
    expect(
      checkDecoratorExistInClass(source2, "Foo", "classDeco111")
    ).toBeFalsy();
  });
});
