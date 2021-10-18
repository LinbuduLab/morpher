import { Project, Scope, SourceFile, VariableDeclarationKind } from "ts-morph";
import path from "path";
import fs from "fs-extra";
import {
  checkExportDeclarationKindByIdentifier,
  checkExportExistByIdentifier,
  checkTypeExportExistByIdentifier,
  checkInterfaceExportExistByIdentifier,
  checkSourceFileHasExports,
  checkSourceFileHasTypeExports,
} from "@ts-morpher/checker";
import {
  getExportVariableIdentifiers,
  getExportVariableStatements,
  getTypeExportDeclaration,
  getTypeExportIdentifiers,
  getInterfaceExportDeclaration,
  getInterfaceExportIdentifiers,
} from "@ts-morpher/helper";
import {
  updateInterfaceExportStructure,
  updateTypeExportStructure,
  updateVariableExportIdentifier,
  updateVariableExportKind,
  updateVariableExportStructure,
} from "../src/export";

const p = new Project();

let source: SourceFile;

let source2: SourceFile;

const savedContent = fs.readFileSync(
  path.resolve(__dirname, "./fixtures/export.fixture.ts")
);

const savedContent2 = fs.readFileSync(
  path.resolve(__dirname, "./fixtures/empty.fixture.ts")
);

beforeEach(() => {
  source && p.removeSourceFile(source);
  source && p.removeSourceFile(source2);

  source = p.addSourceFileAtPath(
    path.resolve(__dirname, "./fixtures/export.fixture.ts")
  );

  source2 = p.addSourceFileAtPath(
    path.resolve(__dirname, "./fixtures/empty.fixture.ts")
  );
});

afterEach(() => {
  fs.writeFileSync(
    path.resolve(__dirname, "./fixtures/export.fixture.ts"),
    savedContent
  );

  fs.writeFileSync(
    path.resolve(__dirname, "./fixtures/empty.fixture.ts"),
    savedContent2
  );
});

describe("package/modifier-export", () => {
  it("should updtate variable identifier", () => {
    expect(checkExportExistByIdentifier(source, "letFoo")).toBeTruthy();
    expect(checkExportDeclarationKindByIdentifier(source, "letFoo")).toBe(
      VariableDeclarationKind.Let
    );

    const initializer = getExportVariableStatements(source, "letFoo")
      .getDeclarations()[0]!
      .getInitializer()!
      .getText();

    updateVariableExportIdentifier(source, "letFoo", "updatedLetFoo");

    expect(checkExportExistByIdentifier(source, "letFoo")).toBeFalsy();
    expect(checkExportExistByIdentifier(source, "updatedLetFoo")).toBeTruthy();
    expect(
      checkExportDeclarationKindByIdentifier(source, "updatedLetFoo")
    ).toBe(VariableDeclarationKind.Let);
    expect(
      getExportVariableStatements(source, "updatedLetFoo")!
        .getDeclarations()[0]!
        .getInitializer()!
        .getText()
    ).toBe(initializer);
  });
  it("should updtate variable declare kind", () => {
    expect(checkExportExistByIdentifier(source, "letFoo")).toBeTruthy();
    expect(checkExportDeclarationKindByIdentifier(source, "letFoo")).toBe(
      VariableDeclarationKind.Let
    );

    updateVariableExportKind(source, "letFoo", VariableDeclarationKind.Const);

    expect(checkExportExistByIdentifier(source, "letFoo")).toBeTruthy();
    expect(checkExportDeclarationKindByIdentifier(source, "letFoo")).toBe(
      VariableDeclarationKind.Const
    );
  });
  it("should updtate variable structure", () => {
    expect(checkExportExistByIdentifier(source, "letFoo")).toBeTruthy();
    expect(checkExportDeclarationKindByIdentifier(source, "letFoo")).toBe(
      VariableDeclarationKind.Let
    );

    expect(
      getExportVariableStatements(source, "letFoo").getType().getText()
    ).toBe("any");

    updateVariableExportStructure(source, "letFoo", {
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: "letFoo1",
          initializer: "599",
        },
      ],
    });

    expect(getExportVariableStatements(source, "letFoo1").getText()).toBe(
      "export const letFoo1 = 599;"
    );
  });
  it("should updtate type structure", () => {
    expect(checkTypeExportExistByIdentifier(source, "Foo1")).toBeTruthy();
    expect(getTypeExportDeclaration(source, "Foo1")).toBeDefined();
    expect(getTypeExportDeclaration(source, "Foo1").getText()).toBe(
      "export type Foo1 = string;"
    );

    updateTypeExportStructure(source, "Foo1", {
      name: "UpdatedFoo",
      type: "Record<string, any>",
      typeParameters: [
        {
          name: "T",
          constraint: "string",
          default: "'default_string_literal'",
        },
      ],
    });

    expect(checkTypeExportExistByIdentifier(source, "Foo1")).toBeFalsy();
    expect(checkTypeExportExistByIdentifier(source, "UpdatedFoo")).toBeTruthy();
    expect(getTypeExportDeclaration(source, "Foo1")).toBeUndefined();
    expect(getTypeExportDeclaration(source, "UpdatedFoo").getText()).toBe(
      "export type UpdatedFoo<T extends string = 'default_string_literal'> = Record<string, any>;"
    );
  });
  it("should updtate interface structure", () => {
    expect(checkInterfaceExportExistByIdentifier(source, "Bar1")).toBeTruthy();
    expect(getInterfaceExportDeclaration(source, "Bar1")).toBeDefined();

    updateInterfaceExportStructure(source, "Bar1", {
      name: "Baz",
      extends: ["Tmp1", "Tmp2"],
      typeParameters: [
        {
          name: "T",
          constraint: "string",
          default: "'default_string_literal'",
        },
      ],
    });

    expect(checkInterfaceExportExistByIdentifier(source, "Bar1")).toBeFalsy();
    expect(getInterfaceExportDeclaration(source, "Bar1")).toBeUndefined();

    const i = getInterfaceExportDeclaration(source, "Baz");

    expect(checkInterfaceExportExistByIdentifier(source, "Baz")).toBeTruthy();
    expect(i).toBeDefined();
    expect(i.getName()).toBe("Baz");
    expect(
      i
        .getExtends()
        .map((x) => x.getText())
        .sort()
    ).toEqual(["Tmp1", "Tmp2"].sort());
    expect(i.getTypeParameter("T")).toBeDefined();
    expect(i.getTypeParameter("T")!.getConstraint()!.getText()).toBe("string");
    expect(i.getTypeParameter("T")!.getDefault()!.getText()).toBe(
      "'default_string_literal'"
    );
  });

  it("should skip when target does not exist", () => {
    updateVariableExportStructure(source, "inexist", {
      declarationKind: VariableDeclarationKind.Const,
    });
    updateTypeExportStructure(source, "Inexist", {
      name: "I",
      type: "boolean",
      typeParameters: [{ name: "T" }],
    });
    updateInterfaceExportStructure(source, "Inexist", {
      name: "I",
      typeParameters: [{ name: "T" }],
    });
  });
});
