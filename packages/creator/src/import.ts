import { ImportDeclaration, SourceFile, SyntaxKind } from "ts-morph";
import ow from "ow";

import { ensureArray, MaybyArray } from "@ts-morpher/helper";
import { ImportType } from "@ts-morpher/types";

/**
 * Add a namespace import declaration
 * @param source
 * @param namespace import namespace
 * @param moduleSpecifier import specifier
 * @param importType ImportType.NAMESPACE_IMPORT
 * @param apply save source file
 * @returns void
 */
export function addImportDeclaration(
  source: SourceFile,
  namespace: string,
  moduleSpecifier: string,
  importType: ImportType.NAMESPACE_IMPORT,
  apply?: boolean
): void;

/**
 * Add a named import declaration
 * @param source
 * @param namedImports named imports member
 * @param moduleSpecifier import specifier
 * @param importType ImportType.NAMED_IMPORTS
 * @param apply save source file
 * @returns void
 */
export function addImportDeclaration(
  source: SourceFile,
  namedImports: MaybyArray<string>,
  moduleSpecifier: string,
  importType: ImportType.NAMED_IMPORTS,
  apply?: boolean
): void;

/**
 * Add a default import declaration
 * @param source
 * @param importClause import clause
 * @param moduleSpecifier import specifier
 * @param importType ImportType.DEFAULT_IMPORT
 * @param apply save source file
 * @returns void
 */
export function addImportDeclaration(
  source: SourceFile,
  defaultImport: string,
  moduleSpecifier: string,
  importType: ImportType.DEFAULT_IMPORT,
  apply?: boolean
): void;

/**
 * Add a new import declaration of specified type
 * @param source
 * @param importClause namespace / named imports / default import depends on importType
 * @param moduleSpecifier import specifier
 * @param importType import type to create
 * @param apply save source file
 * @returns void
 */
export function addImportDeclaration(
  source: SourceFile,
  importClause: MaybyArray<string>,
  moduleSpecifier: string,
  importType: ImportType,
  apply?: boolean
): void {
  switch (importType) {
    case ImportType.DEFAULT_IMPORT:
      ow(importClause, ow.string);

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
      ow(importClause, ow.string);

      source.addImportDeclaration({
        namespaceImport: importClause,
        moduleSpecifier: moduleSpecifier,
      });

      break;

    default:
      return;
  }

  apply && source.saveSync();
}
