import { Project, SourceFile } from "ts-morph";
import path from "path";
import tmp from "tmp";
import { createImportDeclaration } from "../src/import";

import { ImportType } from "@ts-morpher/types";
import {
  checkImportExistByModuleSpecifier,
  checkImportType,
  checkImportTypeByModuleSpecifier,
  checkIsDefaultImportByModuleSpecifier,
  checkIsTypeOnlyImportByModuleSpecifier,
} from "@ts-morpher/checker";
import { getImportDeclarations } from "@ts-morpher/helper";

let source: SourceFile;

beforeEach(() => {
  source = new Project().addSourceFileAtPath(tmp.fileSync().name);
});

describe("package/creator-import", () => {
  it("should create default import declarations", () => {
    createImportDeclaration(
      source,
      "fs",
      "fs",
      ImportType.DEFAULT_IMPORT,
      true
    );

    expect(getImportDeclarations(source, "fs")).toBeDefined();
    expect(checkImportTypeByModuleSpecifier(source, "fs")).toBe(
      ImportType.DEFAULT_IMPORT
    );
  });

  it("should create named import declarations", () => {
    createImportDeclaration(
      source,
      ["CompilerOptions"],
      "typescript",
      ImportType.NAMED_IMPORTS,
      true,
      true
    );

    expect(getImportDeclarations(source, "typescript")).toBeDefined();
    expect(
      checkIsTypeOnlyImportByModuleSpecifier(source, "typescript")
    ).toBeTruthy();
    expect(checkImportTypeByModuleSpecifier(source, "typescript")).toBe(
      ImportType.NAMED_IMPORTS
    );
  });

  it("should create default with named import declarations", () => {
    createImportDeclaration(
      source,
      ["fs", "copySync"],
      "fs",
      ImportType.DEFAULT_WITH_NAMED_IMPORT,
      true
    );

    expect(getImportDeclarations(source, "fs")).toBeDefined();
    expect(checkImportTypeByModuleSpecifier(source, "fs")).toBe(
      ImportType.DEFAULT_WITH_NAMED_IMPORT
    );
  });

  it("should create namespace import declarations", () => {
    createImportDeclaration(
      source,
      "path",
      "path",
      ImportType.NAMESPACE_IMPORT,
      true
    );

    expect(getImportDeclarations(source, "path")).toBeDefined();
    expect(checkImportTypeByModuleSpecifier(source, "path")).toBe(
      ImportType.NAMESPACE_IMPORT
    );
  });
});
