import { Project, Scope, SourceFile } from "ts-morph";
import path from "path";
import fs from "fs-extra";
import {
  checkPropExistInClass,
  checkMethodExistInClass,
  checkDecoratorExistInClass,
  checkClassExistInSourceFile,
} from "@ts-morpher/checker";
import {
  getClassIdentifiers,
  getClassDeclarations,
  getClassPropIdentifiers,
  getClassPropDeclarations,
  getClassMethodIdentifiers,
  getClassMethodDeclarations,
  getClassDecoratorIdentifiers,
  getClassDecorators,
} from "@ts-morpher/helper";
import {
  updateClassIdentifier,
  updateBaseClassDecoratorStructure,
  updateBaseClassMethodStructure,
  updateBaseClassPropStructure,
  updateBaseClassStructure,
  updateClassDecoratorIdentifier,
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

describe("package/modifier-class", () => {
  it("should update class identifier", () => {
    expect(checkClassExistInSourceFile(source, "Foo")).toBeTruthy();
    expect(getClassIdentifiers(source)).toContain("Foo");
    expect(getClassDeclarations(source, "Foo")).toBeDefined();

    updateClassIdentifier(source, "Foo", "Bar");

    expect(checkClassExistInSourceFile(source, "Foo")).toBeFalsy();
    expect(getClassIdentifiers(source)).not.toContain("Foo");
    expect(getClassDeclarations(source, "Foo")).toBeUndefined();

    expect(checkClassExistInSourceFile(source, "Bar")).toBeTruthy();
    expect(getClassIdentifiers(source)).toContain("Bar");
    expect(getClassDeclarations(source, "Bar")).toBeDefined();
  });
  it("should update class", () => {
    expect(checkClassExistInSourceFile(source, "Foo")).toBeTruthy();
    expect(getClassIdentifiers(source)).toContain("Foo");
    expect(getClassDeclarations(source, "Foo")).toBeDefined();

    updateBaseClassStructure(source, "Foo", {
      name: "Bar",
      extends: "Abs",
      isDefaultExport: true,
      implements: ["Impl1", "Impl2"],
    });

    const c = getClassDeclarations(source, "Bar")!;

    expect(checkClassExistInSourceFile(source, "Foo")).toBeFalsy();
    expect(getClassIdentifiers(source)).not.toContain("Foo");
    expect(getClassDeclarations(source, "Foo")).toBeUndefined();

    expect(checkClassExistInSourceFile(source, "Bar")).toBeTruthy();
    expect(getClassIdentifiers(source)).toContain("Bar");
    expect(c).toBeDefined();

    expect(c.getName()).toBe("Bar");
    expect(c.isExported()).toBeTruthy();
    expect(c.isDefaultExport()).toBeTruthy();
    expect(c.getExtends()!.getText()).toBe("Abs");
    expect(c.getImplements().map((x) => x.getText())).toEqual([
      "Impl1",
      "Impl2",
    ]);
  });
  it("should update class prop", () => {
    expect(checkPropExistInClass(source, "Foo", "prop1")).toBeTruthy();
    expect(getClassPropIdentifiers(source, "Foo")).toContain("prop1");
    expect(getClassPropDeclarations(source, "Foo", "prop1")).toBeDefined();

    updateBaseClassPropStructure(source, "Foo", "prop1", {
      name: "prop599",
      scope: Scope.Private,
      type: "boolean",
      hasQuestionToken: true,
    });

    const p = getClassPropDeclarations(source, "Foo", "prop599");

    expect(checkPropExistInClass(source, "Foo", "prop1")).toBeFalsy();
    expect(getClassPropIdentifiers(source, "Foo")).not.toContain("prop1");
    expect(getClassPropDeclarations(source, "Foo", "prop1")).toBeUndefined();

    expect(checkPropExistInClass(source, "Foo", "prop599")).toBeTruthy();
    expect(getClassPropIdentifiers(source, "Foo")).toContain("prop599");
    expect(p).toBeDefined();
    expect(p?.getScope()).toBe(Scope.Private);
    expect(p?.getTypeNode()?.getText()).toBe("boolean");
    expect(p?.hasQuestionToken()).toBeTruthy();
  });

  it("should update class method", () => {
    expect(checkMethodExistInClass(source, "Foo", "method1")).toBeTruthy();
    expect(getClassMethodIdentifiers(source, "Foo")).toContain("method1");
    expect(getClassMethodDeclarations(source, "Foo", "method1")).toBeDefined();

    updateBaseClassMethodStructure(source, "Foo", "method1", {
      name: "method599",
      scope: Scope.Private,
      isAsync: true,
      isStatic: true,
      returnType: "Promise<void>",
      hasQuestionToken: true,
    });

    const m = getClassMethodDeclarations(source, "Foo", "method599");

    expect(checkMethodExistInClass(source, "Foo", "method1")).toBeFalsy();
    expect(getClassMethodIdentifiers(source, "Foo")).not.toContain("method1");
    expect(
      getClassMethodDeclarations(source, "Foo", "method1")
    ).toBeUndefined();

    expect(checkMethodExistInClass(source, "Foo", "method599")).toBeTruthy();
    expect(getClassMethodIdentifiers(source, "Foo")).toContain("method599");
    expect(m?.getScope()).toBe(Scope.Private);
    expect(m?.isAsync()).toBeTruthy();
    expect(m?.isStatic()).toBeTruthy();
    expect(m?.getReturnTypeNode()?.getText()).toBe("Promise<void>");
    expect(m?.hasQuestionToken()).toBeTruthy();
  });
  it("should update class decorator identifier", () => {
    expect(checkDecoratorExistInClass(source, "Foo", "classDeco")).toBeTruthy();
    expect(getClassDecoratorIdentifiers(source, "Foo")).toContain("classDeco");
    expect(getClassDecorators(source, "Foo", "classDeco")).toBeDefined();

    updateClassDecoratorIdentifier(
      source,
      "Foo",
      "classDeco",
      "updatedClassDeco"
    );

    expect(checkDecoratorExistInClass(source, "Foo", "classDeco")).toBeFalsy();
    expect(getClassDecoratorIdentifiers(source, "Foo")).not.toContain(
      "classDeco"
    );
    expect(getClassDecorators(source, "Foo", "classDeco")).toBeUndefined();

    expect(
      checkDecoratorExistInClass(source, "Foo", "updatedClassDeco")
    ).toBeTruthy();
    expect(getClassDecoratorIdentifiers(source, "Foo")).toContain(
      "updatedClassDeco"
    );
    expect(getClassDecorators(source, "Foo", "updatedClassDeco")).toBeDefined();
  });

  it("should update class decorator", () => {
    expect(checkDecoratorExistInClass(source, "Foo", "classDeco")).toBeTruthy();
    expect(getClassDecoratorIdentifiers(source, "Foo")).toContain("classDeco");
    expect(getClassDecorators(source, "Foo", "classDeco")).toBeDefined();

    updateBaseClassDecoratorStructure(source, "Foo", "classDeco", {
      name: "updatedClassDeco",
      arguments: ["arg1", "arg2"],
    });

    const d = getClassDecorators(source, "Foo", "updatedClassDeco")!;

    expect(checkDecoratorExistInClass(source, "Foo", "classDeco")).toBeFalsy();
    expect(getClassDecoratorIdentifiers(source, "Foo")).not.toContain(
      "classDeco"
    );
    expect(getClassDecorators(source, "Foo", "classDeco")).toBeUndefined();

    expect(
      checkDecoratorExistInClass(source, "Foo", "updatedClassDeco")
    ).toBeTruthy();
    expect(getClassDecoratorIdentifiers(source, "Foo")).toContain(
      "updatedClassDeco"
    );
    expect(d).toBeDefined();
    expect(d.getName()).toBe("updatedClassDeco");
    expect(d.isDecoratorFactory()).toBeTruthy();
    expect(d.getArguments().map((x) => x.getText())).toEqual(["arg1", "arg2"]);
  });

  it("should skip when target not found", () => {
    updateClassIdentifier(source, "Foo1", "Bar");
    updateBaseClassStructure(source, "Foo1", { name: "Bar" });

    updateBaseClassMethodStructure(source, "Foo1", "method1", {
      name: "method599",
    });
    updateBaseClassMethodStructure(source, "Foo", "method599", {
      name: "method1",
    });

    updateBaseClassPropStructure(source, "Foo1", "prop1", { name: "prop599" });
    updateBaseClassPropStructure(source, "Foo", "prop599", {
      name: "prop1",
    });

    updateClassDecoratorIdentifier(
      source,
      "Foo1",
      "classDeco",
      "updatedClassDeco"
    );
    updateClassDecoratorIdentifier(
      source,
      "Foo",
      "classDeco1",
      "updatedClassDeco"
    );
    updateBaseClassDecoratorStructure(source, "Foo1", "classDeco", {
      name: "decox",
    });
    updateBaseClassDecoratorStructure(source, "Foo", "classDeco1", {
      name: "decox",
    });

    expect(
      fs.readFileSync(path.resolve(__dirname, "./fixtures/class.fixture.ts"))
    ).toEqual(savedContent);
  });
});
