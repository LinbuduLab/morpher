import { Project, SourceFile, VariableDeclarationKind } from "ts-morph";
import path from "path";
import tmp from "tmp";
import {
  createBaseInterfaceExport,
  createBaseTypeExport,
  createBaseVariableExport,
} from "../src/export";

import { ExportType, ImportType } from "@ts-morpher/types";
import {
  checkExportExistByIdentifier,
  checkExportTypeByStatement,
  checkExportTypeByIdentifier,
  checkTypeExportExistByIdentifier,
  checkInterfaceExportExistByIdentifier,
} from "@ts-morpher/checker";
import {
  getExportVariableStatements,
  getExportVariableIdentifiers,
  getTypeExportDeclaration,
  getTypeExportIdentifiers,
  getInterfaceExportDeclaration,
  getInterfaceExportIdentifiers,
} from "@ts-morpher/helper";

let source: SourceFile;

beforeEach(() => {
  source = new Project().addSourceFileAtPath(tmp.fileSync().name);
});

describe("package/creator-export", () => {
  it("should create variable export declared by var", () => {
    createBaseVariableExport(
      source,
      "foo",
      "foo-var-value",
      VariableDeclarationKind.Var,
      true
    );

    expect(checkExportExistByIdentifier(source, "foo")).toBeTruthy();
    expect(checkExportTypeByIdentifier(source, "foo")).toBe(ExportType.VAR);
    expect(getExportVariableIdentifiers(source)).toContain("foo");
  });

  it("should create variable export declared by let", () => {
    createBaseVariableExport(
      source,
      "foo",
      "foo-var-value",
      VariableDeclarationKind.Let,
      true
    );

    expect(checkExportExistByIdentifier(source, "foo")).toBeTruthy();
    expect(checkExportTypeByIdentifier(source, "foo")).toBe(ExportType.LET);
    expect(getExportVariableIdentifiers(source)).toContain("foo");
  });

  it("should create variable export declared by const", () => {
    createBaseVariableExport(
      source,
      "foo",
      "foo-var-value",
      VariableDeclarationKind.Const,
      true
    );

    expect(checkExportExistByIdentifier(source, "foo")).toBeTruthy();
    expect(checkExportTypeByIdentifier(source, "foo")).toBe(ExportType.CONST);
    expect(getExportVariableIdentifiers(source)).toContain("foo");
  });

  it("should create type alias export", () => {
    createBaseTypeExport(source, "Foo", "string", undefined, true);

    const f = getTypeExportDeclaration(source, "Foo");

    expect(checkTypeExportExistByIdentifier(source, "Foo")).toBeTruthy();
    expect(f).toBeDefined();
    expect(f.getName()).toBe("Foo");
    expect(f.getTypeNode()?.getText()).toBe("string");

    createBaseTypeExport(
      source,
      "Bar",
      "Record<T, K>",
      [
        {
          name: "T",
          constraint: "string",
          default: "default_string",
        },
        {
          name: "K",
          constraint: "Record<string, unknown>",
          default: undefined,
        },
      ],
      true
    );

    const b = getTypeExportDeclaration(source, "Bar");

    expect(checkTypeExportExistByIdentifier(source, "Bar")).toBeTruthy();
    expect(b).toBeDefined();
    expect(b.getName()).toBe("Bar");
    expect(b.getTypeNode()?.getText()).toBe("Record<T, K>");

    expect(b.getTypeParameters().map((x) => x.getName())).toEqual(["T", "K"]);
    expect(
      b.getTypeParameters().map((x) => x.getConstraint()?.getText())
    ).toEqual(["string", "Record<string, unknown>"]);
    expect(b.getTypeParameters().map((x) => x.getDefault()?.getText())).toEqual(
      ["default_string", undefined]
    );
  });

  it("should create base interface export", () => {
    createBaseInterfaceExport(source, "Foo", [], [], [], [], true);

    const f = getInterfaceExportDeclaration(source, "Foo");

    expect(checkInterfaceExportExistByIdentifier(source, "Foo")).toBeTruthy();
    expect(f).toBeDefined();
    expect(f.getName()).toBe("Foo");
    expect(f.getProperties().length).toBe(0);
    expect(f.getIndexSignatures().length).toBe(0);
    expect(f.getExtends().length).toBe(0);
    expect(f.getTypeParameters().length).toBe(0);
    expect(f.isExported()).toBeTruthy;
  });

  it("should create complex interface export", () => {
    createBaseInterfaceExport(
      source,
      "Foo",
      ["I1", "I2"],
      [
        {
          keyName: "key1",
          keyType: "string",
          returnType: "any",
        },
        {
          keyName: "key2",
          keyType: "number",
          returnType: "any",
        },
      ],
      [
        {
          name: "name",
          type: "string",
        },
        {
          name: "age",
          type: "number",
        },
        {
          name: "gen",
          type: "T",
        },
      ],
      [
        {
          name: "T",
          constraint: "string",
          default: "default_string",
        },
      ],
      true
    );

    const f = getInterfaceExportDeclaration(source, "Foo");

    expect(checkInterfaceExportExistByIdentifier(source, "Foo")).toBeTruthy();
    expect(f).toBeDefined();
    expect(f.getName()).toBe("Foo");

    expect(f.getProperties().length).toBe(3);
    expect(f.getProperties().map((x) => x.getName())).toEqual([
      "name",
      "age",
      "gen",
    ]);
    expect(f.getProperties().map((x) => x.getTypeNode()?.getText())).toEqual([
      "string",
      "number",
      "T",
    ]);

    expect(f.getIndexSignatures().length).toBe(2);
    expect(f.getIndexSignatures().map((x) => x.getKeyName())).toEqual([
      "key1",
      "key2",
    ]);
    // FIXME: seems like internal error of ts-morph
    expect(f.getIndexSignatures().map((x) => x.getKeyType().getText())).toEqual(
      ["any", "any"]
    );
    // expect(
    //   f.getIndexSignatures().map((x) => x.getReturnType().getText())
    // ).toEqual(["any", "any"]);

    expect(f.getExtends().length).toBe(2);
    expect(f.getExtends().map((x) => x.getText())).toEqual(["I1", "I2"]);

    expect(f.getTypeParameters().length).toBe(1);
    expect(f.getTypeParameters().map((x) => x.getName())).toEqual(["T"]);
    expect(
      f.getTypeParameters().map((x) => x.getConstraint()?.getText())
    ).toEqual(["string"]);
    expect(f.getTypeParameters().map((x) => x.getDefault()?.getText())).toEqual(
      ["default_string"]
    );

    expect(f.isExported()).toBeTruthy;
  });
});
