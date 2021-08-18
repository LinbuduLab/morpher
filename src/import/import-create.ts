import { ImportDeclaration, SourceFile, SyntaxKind } from "ts-morph";
import debug from "debug";

import { ensureArray } from "../utils/helper";

import { ImportType } from "../typings/import";

const importDebugger = debug("import");

export function addImportDeclaration(
  source: SourceFile,
  namespace: string,
  moduleSpecifier: string,
  importType: ImportType.NAMESPACE_IMPORT,
  apply?: boolean
): void;

export function addImportDeclaration(
  source: SourceFile,
  namedImports: string[],
  moduleSpecifier: string,
  importType: ImportType.NAMED_IMPORTS,
  apply?: boolean
): void;

export function addImportDeclaration(
  source: SourceFile,
  defaultImport: string,
  moduleSpecifier: string,
  importType: ImportType.DEFAULT_IMPORT,
  apply?: boolean
): void;

export function addImportDeclaration(
  source: SourceFile,
  importClause: string | string[],
  moduleSpecifier: string,
  importType: ImportType,
  apply?: boolean
) {
  switch (importType) {
    case ImportType.DEFAULT_IMPORT:
      if (typeof importClause !== "string") throw new Error();

      source.addImportDeclaration({
        defaultImport: importClause,
        moduleSpecifier,
      });

      break;

    case ImportType.NAMED_IMPORTS:
      source.addImportDeclaration({
        namedImports: ensureArray(importClause),
        moduleSpecifier,
      });

      break;

    case ImportType.NAMESPACE_IMPORT:
      if (typeof importClause !== "string") throw new Error();

      source.addImportDeclaration({
        namespaceImport: importClause as string,
        moduleSpecifier: moduleSpecifier,
      });

      break;

    default:
      importDebugger("Invalid ImportType, Skipped.");
      return;
  }

  apply && source.saveSync();
}
