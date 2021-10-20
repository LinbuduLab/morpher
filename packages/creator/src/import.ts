import { SourceFile } from "ts-morph";
import ow from "ow";

import { ensureArray, MaybeArray } from "@ts-morpher/helper";
import { ImportType } from "@ts-morpher/types";

/**
 * Add a namespace import declaration.
 * @param source SourceFile
 * @param namespace import namespace
 * @param moduleSpecifier import specifier
 * @param importType ImportType.NAMESPACE_IMPORT
 * @param apply save source file
 * @returns void
 */
export function createImportDeclaration(
  source: SourceFile,
  namespace: string,
  moduleSpecifier: string,
  importType: ImportType.NAMESPACE_IMPORT,
  apply?: boolean
): void;

/**
 * Add a named import declaration.
 * @param source SourceFile
 * @param namedImports named imports member
 * @param moduleSpecifier import specifier
 * @param importType ImportType.NAMED_IMPORTS
 * @param isTypeOnly create type only import
 * @param apply save source file
 * @returns void
 */
export function createImportDeclaration(
  source: SourceFile,
  namedImports: MaybeArray<string>,
  moduleSpecifier: string,
  importType: ImportType.NAMED_IMPORTS,
  isTypeOnly?: boolean,
  apply?: boolean
): void;

/**
 * Add a default import declaration.
 * @param source SourceFile
 * @param importClause import clause
 * @param moduleSpecifier import specifier
 * @param importType ImportType.DEFAULT_IMPORT
 * @param isTypeOnly create type only import
 * @param apply save source file
 * @returns void
 */
export function createImportDeclaration(
  source: SourceFile,
  defaultImport: string,
  moduleSpecifier: string,
  importType: ImportType.DEFAULT_IMPORT,
  apply?: boolean
): void;

/**
 * Add a default with named import declaration.
 * @param source SourceFile
 * @param defaultAndNamedImports default and named imports member, the 1st item will be regarded as default
 * @param moduleSpecifier import specifier
 * @param importType ImportType.DEFAULT_WITH_NAMED_IMPORT
 * @param apply save source file
 * @returns void
 */
export function createImportDeclaration(
  source: SourceFile,
  namedImports: MaybeArray<string>,
  moduleSpecifier: string,
  importType: ImportType.DEFAULT_WITH_NAMED_IMPORT,
  apply?: boolean
): void;

/**
 * Add a new import declaration of specified type.
 * @param source SourceFile
 * @param importClause namespace / named imports / default import depends on importType
 * @param moduleSpecifier import specifier
 * @param importType import type to create
 * @param isTypeOnly create type only import
 * @param apply save source file
 * @returns void
 */
export function createImportDeclaration(
  source: SourceFile,
  importClause: MaybeArray<string>,
  moduleSpecifier: string,
  importType: ImportType,
  isTypeOnly = false,
  apply = true
): void {
  switch (importType) {
    case ImportType.DEFAULT_IMPORT:
      ow(importClause, ow.string);

      source.addImportDeclaration({
        defaultImport: importClause,
        moduleSpecifier,
        isTypeOnly: false,
      });

      break;

    case ImportType.NAMED_IMPORTS:
      source.addImportDeclaration({
        namedImports: ensureArray(importClause),
        moduleSpecifier,
        isTypeOnly,
      });

      break;

    case ImportType.NAMESPACE_IMPORT:
      ow(importClause, ow.string);

      source.addImportDeclaration({
        namespaceImport: importClause,
        moduleSpecifier: moduleSpecifier,
        isTypeOnly: false,
      });

      break;

    case ImportType.DEFAULT_WITH_NAMED_IMPORT:
      const [defaultImport, ...namedImports] = ensureArray(importClause);

      source.addImportDeclaration({
        defaultImport,
        namedImports,
        moduleSpecifier,
        isTypeOnly: false,
      });

      break;
  }

  apply && source.saveSync();
}
