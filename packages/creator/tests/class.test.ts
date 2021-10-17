import { Project, Scope, SourceFile, VariableDeclarationKind } from "ts-morph";
import tmp from "tmp";
import {
  createBaseClass,
  createBaseClassMethod,
  createBaseClassProp,
  createBaseClassDecorator,
} from "../src/class";
import {
  checkClassExistInSourceFile,
  checkClassHasMethods,
  checkClassHasDecorators,
  checkClassHasProps,
  checkDecoratorExistInClass,
  checkPropExistInClass,
  checkMethodExistInClass,
} from "@ts-morpher/checker";
import {
  getClassDeclarations,
  getClassDecorators,
  getClassMethodDeclarations,
  getClassPropDeclarations,
} from "@ts-morpher/helper";

let source: SourceFile;

beforeEach(() => {
  source = new Project().addSourceFileAtPath(tmp.fileSync().name);
});

describe("package/creator-class", () => {
  it("should create base class declaration", () => {
    createBaseClass(
      source,
      {
        name: "Foo",
      },
      true
    );

    const c = getClassDeclarations(source, "Foo")!;

    expect(checkClassExistInSourceFile(source, "Foo")).toBeTruthy();
    expect(c).toBeDefined();
    expect(c.getName()).toBe("Foo");
    expect(c.getExtends()).toBeUndefined();
    expect(c.getImplements()).toEqual([]);
    expect(c.isAbstract()).toBeFalsy();
    expect(c.isDefaultExport()).toBeFalsy();
    expect(c.isExported()).toBeFalsy();

    createBaseClass(
      source,
      {
        name: "Foo",
      },
      true
    );
  });

  it("should create complex class declaration", () => {
    createBaseClass(
      source,
      {
        name: "Foo",
        implements: ["Bar", "Baz"],
        extends: "FooParent",
        isAbstract: false,
        isDefaultExport: true,
        isExported: true,
      },
      true
    );

    const c = getClassDeclarations(source, "Foo")!;

    expect(checkClassExistInSourceFile(source, "Foo")).toBeTruthy();
    expect(c).toBeDefined();
    expect(c.getName()).toBe("Foo");
    expect(c.getExtends()?.getText()).toBe("FooParent");
    expect(c.getImplements().map((x) => x.getText())).toEqual(["Bar", "Baz"]);
    expect(c.isAbstract()).toBeFalsy();
    expect(c.isDefaultExport()).toBeTruthy();
    expect(c.isExported()).toBeTruthy();
  });

  it("should create base method declaration", () => {
    createBaseClass(
      source,
      {
        name: "Foo",
      },
      true
    );

    expect(checkClassHasMethods(source, "Foo")).toBeFalsy();

    createBaseClassMethod(
      source,
      "Foo",
      {
        name: "method1",
      },
      true
    );

    expect(checkClassHasMethods(source, "Foo")).toBeTruthy();
    expect(checkMethodExistInClass(source, "Foo", "method1")).toBeTruthy();

    const m = getClassMethodDeclarations(source, "Foo", "method1")!;

    expect(m).toBeDefined();
    expect(m.getName()).toBe("method1");
    expect(m.getReturnType().getText()).toBe("void");
    expect(m.isAbstract()).toBeFalsy();
    expect(m.isAsync()).toBeFalsy();
    expect(m.isStatic()).toBeFalsy();
    expect(m.isGenerator()).toBeFalsy();
    expect(m.hasOverrideKeyword()).toBeFalsy();
    expect(m.hasQuestionToken()).toBeFalsy();
    expect(m.getDecorators()).toEqual([]);
    expect(m.getScope()).toBe(Scope.Public);
    expect(m.getParameters()).toEqual([]);
    expect(m.getTypeParameters()).toEqual([]);
  });

  it("should create complex method declaration", () => {
    createBaseClass(
      source,
      {
        name: "Foo",
      },
      true
    );

    expect(checkClassHasMethods(source, "Foo")).toBeFalsy();

    createBaseClassMethod(
      source,
      "Foo",
      {
        name: "method1",
        isAsync: true,
        isStatic: true,
        hasOverrideKeyword: true,
        hasQuestionToken: true,
        scope: Scope.Private,
        parameters: [
          {
            name: "arg1",
            type: "string",
            hasQuestionToken: false,
          },
          {
            name: "arg2",
            type: "boolean",
            hasQuestionToken: true,
          },
        ],
        typeParameters: [
          { name: "T", constraint: "string", default: "default_string" },
        ],
        returnType: "any",
        decorators: [
          {
            name: "deco1",
            arguments: [],
          },
          {
            name: "deco2",
            arguments: ["xxx"],
          },
          {
            name: "deco3",
            arguments: undefined,
          },
        ],
      },
      true
    );

    expect(checkClassHasMethods(source, "Foo")).toBeTruthy();
    expect(checkMethodExistInClass(source, "Foo", "method1")).toBeTruthy();

    const m = getClassMethodDeclarations(source, "Foo", "method1")!;

    expect(m).toBeDefined();
    expect(m.getName()).toBe("method1");
    expect(m.getReturnTypeNode()?.getText()).toBe("any");
    expect(m.isAbstract()).toBeFalsy();
    expect(m.isAsync()).toBeTruthy();
    expect(m.isStatic()).toBeTruthy();
    expect(m.isGenerator()).toBeFalsy();
    expect(m.hasOverrideKeyword()).toBeTruthy();
    expect(m.hasQuestionToken()).toBeTruthy();

    expect(m.getDecorators().map((x) => x.getName())).toEqual([
      "deco1",
      "deco2",
      "deco3",
    ]);
    expect(m.getDecorators().map((x) => x.isDecoratorFactory())).toEqual([
      true,
      true,
      false,
    ]);

    expect(
      m
        .getDecorators()
        .map((x) => x.getArguments().map((x) => x.getText()))
        .sort()
    ).toEqual([[], ["xxx"], []].sort());

    expect(m.getScope()).toBe(Scope.Private);

    expect(m.getParameters().map((x) => x.getName())).toEqual(["arg1", "arg2"]);
    expect(m.getParameters().map((x) => x.getTypeNode()?.getText())).toEqual([
      "string",
      "boolean",
    ]);
    expect(m.getParameters().map((x) => x.hasInitializer())).toEqual([
      false,
      false,
    ]);

    expect(m.getParameters().map((x) => x.hasQuestionToken())).toEqual([
      false,
      true,
    ]);

    expect(m.getTypeParameters()[0].getName()).toBe("T");
    expect(m.getTypeParameters()[0].getConstraint()?.getText()).toBe("string");
    expect(m.getTypeParameters()[0].getDefault()?.getText()).toBe(
      "default_string"
    );
  });
  it("should create base prop declaration", () => {
    createBaseClass(
      source,
      {
        name: "Foo",
      },
      true
    );

    expect(checkClassHasProps(source, "Foo")).toBeFalsy();

    createBaseClassProp(
      source,
      "Foo",
      {
        name: "prop1",
      },
      true
    );

    expect(checkClassHasProps(source, "Foo")).toBeTruthy();
    expect(checkPropExistInClass(source, "Foo", "prop1")).toBeTruthy();

    const p = getClassPropDeclarations(source, "Foo", "prop1")!;

    expect(p).toBeDefined();
    expect(p.getName()).toBe("prop1");
    expect(p.isAbstract()).toBeFalsy();
    expect(p.isReadonly()).toBeFalsy();
    expect(p.isStatic()).toBeFalsy();

    expect(p.hasInitializer()).toBeFalsy();
    expect(p.getInitializer()).toBeUndefined();

    expect(p.getScope()).toBe(Scope.Public);
    expect(p.hasQuestionToken()).toBeFalsy();
    expect(p.hasDeclareKeyword()).toBeFalsy();
    expect(p.hasOverrideKeyword()).toBeFalsy();
    expect(p.hasExclamationToken()).toBeFalsy();
    expect(p.getDecorators()).toEqual([]);
  });

  it("should create complex prop declaration", () => {
    createBaseClass(
      source,
      {
        name: "Foo",
      },
      true
    );

    expect(checkClassHasProps(source, "Foo")).toBeFalsy();

    createBaseClassProp(
      source,
      "Foo",
      {
        name: "prop1",
        hasExclamationToken: true,
        hasOverrideKeyword: true,
        hasQuestionToken: false,
        type: "string",
        initializer: (writer) => writer.write("linbudu"),
        isAbstract: false,
        isReadonly: true,
        isStatic: true,
        scope: Scope.Private,
        decorators: [
          {
            name: "deco1",
            arguments: [],
          },
          {
            name: "deco2",
            arguments: ["xxx"],
          },
          {
            name: "deco3",
            arguments: undefined,
          },
        ],
      },
      true
    );

    expect(checkClassHasProps(source, "Foo")).toBeTruthy();
    expect(checkPropExistInClass(source, "Foo", "prop1")).toBeTruthy();

    const p = getClassPropDeclarations(source, "Foo", "prop1")!;

    expect(p).toBeDefined();
    expect(p.getName()).toBe("prop1");
    expect(p.isAbstract()).toBeFalsy();
    expect(p.isReadonly()).toBeTruthy();
    expect(p.isStatic()).toBeTruthy();

    expect(p.hasInitializer()).toBeTruthy();
    expect(p.getInitializer()?.getText()).toBe("linbudu");

    expect(p.getScope()).toBe(Scope.Private);
    expect(p.hasQuestionToken()).toBeFalsy();
    expect(p.hasDeclareKeyword()).toBeFalsy();
    expect(p.hasOverrideKeyword()).toBeTruthy();
    expect(p.hasExclamationToken()).toBeTruthy();

    expect(p.getDecorators().map((x) => x.getName())).toEqual([
      "deco1",
      "deco2",
      "deco3",
    ]);
    expect(p.getDecorators().map((x) => x.isDecoratorFactory())).toEqual([
      true,
      true,
      false,
    ]);

    expect(
      p
        .getDecorators()
        .map((x) => x.getArguments().map((x) => x.getText()))
        .sort()
    ).toEqual([[], ["xxx"], []].sort());
  });

  it("should create base class decorator declaration", () => {
    createBaseClass(
      source,
      {
        name: "Foo",
      },
      true
    );

    expect(checkClassHasDecorators(source, "Foo")).toBeFalsy();

    createBaseClassDecorator(
      source,
      "Foo",
      {
        name: "deco1",
      },
      true
    );

    expect(checkClassHasDecorators(source, "Foo")).toBeTruthy();
    expect(checkDecoratorExistInClass(source, "Foo", "deco1")).toBeTruthy();

    const d = getClassDecorators(source, "Foo", "deco1")!;

    expect(d).toBeDefined();
    expect(d.getName()).toBe("deco1");
    expect(d.isDecoratorFactory()).toBeFalsy();
    expect(d.getArguments()).toEqual([]);
    expect(d.getText()).toBe("@deco1");
  });

  it("should create complex class decorator declaration", () => {
    createBaseClass(
      source,
      {
        name: "Foo",
      },
      true
    );

    expect(checkClassHasDecorators(source, "Foo")).toBeFalsy();

    createBaseClassDecorator(
      source,
      "Foo",
      {
        name: "deco1",
        arguments: ["arg1", "arg2"],
      },
      true
    );

    expect(checkClassHasDecorators(source, "Foo")).toBeTruthy();
    expect(checkDecoratorExistInClass(source, "Foo", "deco1")).toBeTruthy();

    const d = getClassDecorators(source, "Foo", "deco1")!;

    expect(d).toBeDefined();
    expect(d.getName()).toBe("deco1");
    expect(d.isDecoratorFactory()).toBeTruthy();
    expect(d.getArguments().map((x) => x.getText())).toEqual(["arg1", "arg2"]);
    expect(d.getTypeArguments().map((x) => x.getText())).toEqual([]);
    expect(d.getText()).toBe("@deco1(arg1, arg2)");
  });

  it("should skip create if declaration exist", () => {
    createBaseClass(
      source,
      {
        name: "Foo",
      },
      true
    );

    expect(getClassDeclarations(source).length).toBe(1);

    expect(
      createBaseClass(
        source,
        {
          name: "Foo",
        },
        true
      )
    ).toBeUndefined();

    expect(getClassDeclarations(source).length).toBe(1);

    createBaseClassMethod(
      source,
      "Foo",
      {
        name: "method1",
      },
      true
    );

    expect(getClassMethodDeclarations(source, "Foo").length).toBe(1);

    expect(
      createBaseClassMethod(
        source,
        "Foo",
        {
          name: "method1",
        },
        true
      )
    ).toBeUndefined();

    expect(
      createBaseClassMethod(
        source,
        "Foo1",
        {
          name: "method1",
        },
        true
      )
    ).toBeUndefined();

    expect(getClassMethodDeclarations(source, "Foo").length).toBe(1);

    createBaseClassProp(
      source,
      "Foo",
      {
        name: "prop1",
      },
      true
    );

    expect(getClassPropDeclarations(source, "Foo").length).toBe(1);

    expect(
      createBaseClassProp(
        source,
        "Foo",
        {
          name: "prop1",
        },
        true
      )
    ).toBeUndefined();

    expect(
      createBaseClassProp(
        source,
        "Foo1",
        {
          name: "prop1",
        },
        true
      )
    ).toBeUndefined();

    expect(getClassPropDeclarations(source, "Foo").length).toBe(1);

    createBaseClassDecorator(
      source,
      "Foo",
      {
        name: "deco1",
      },
      true
    );

    createBaseClassDecorator(
      source,
      "Foo1",
      {
        name: "deco1",
      },
      true
    );

    expect(getClassDecorators(source, "Foo").length).toBe(1);

    expect(
      createBaseClassDecorator(
        source,
        "Foo",
        {
          name: "deco1",
        },
        true
      )
    ).toBeUndefined();

    expect(getClassDecorators(source, "Foo").length).toBe(1);
  });
});
