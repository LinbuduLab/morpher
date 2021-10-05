import { ImportDeclaration, SourceFile } from "ts-morph";
import {
  getImportDeclarations,
  getImportModuleSpecifiers,
} from "@ts-morpher/helper";
import { ImportType } from "@ts-morpher/types";

/**
 * Check does `Import Declaration` exist - by `Module Specifier`
 * @param source
 * @param moduleSpecifier e.g. 'ts-morph' in import { SourceFile } from 'ts-morph'
 * @example
 */
export function checkImportExistBySpecifier(
  source: SourceFile,
  moduleSpecifier: string
): boolean {
  return getImportModuleSpecifiers(source).includes(moduleSpecifier);
}

/**
 * Check dose Source File has `Import Declaration`
 * @param source
 * @example
 */
export function hasImports(source: SourceFile): boolean {
  return Boolean(getImportDeclarations(source).length);
}

/**
 * Check is Import Declaration default import - by `Module Specifier`
 * @param source
 * @param moduleSpecifier e.g. 'ts-morph' in import { SourceFile } from 'ts-morph'
 */
export function checkIsDefaultImportBySpecifier(
  source: SourceFile,
  moduleSpecifier: string
): boolean {
  return checkIsDefaultImportDeclaration(
    getImportDeclarations(source, moduleSpecifier)
  );
}

/**
 * Check is Import Declaration namespace import - by Module Specifier
 * @param source
 * @param moduleSpecifier e.g. 'ts-morph' in import { SourceFile } from 'ts-morph'
 */
export function checkIsNamespaceImportBySpecifier(
  source: SourceFile,
  moduleSpecifier: string
): boolean {
  return checkIsNamespaceImportDeclaration(
    getImportDeclarations(source, moduleSpecifier)
  );
}

/**
 * Check is Import Declaration named import - by Module Specifier
 * @param source
 * @param moduleSpecifier e.g. 'ts-morph' in import { SourceFile } from 'ts-morph'
 */
export function checkIsNamedImportBySpecifier(
  source: SourceFile,
  moduleSpecifier: string
): boolean {
  return checkIsNamedImportDeclaration(
    getImportDeclarations(source, moduleSpecifier)
  );
}

/**
 * Check is Import Declaration default import - by Import Declaration
 * @param source
 * @param moduleSpecifier e.g. 'ts-morph' in import { SourceFile } from 'ts-morph'
 */
export function checkIsDefaultImportDeclaration(
  importSpec: ImportDeclaration
): boolean {
  return Boolean(importSpec.getDefaultImport());
}

/**
 * Check is Import Declaration namespace import - by Import Declaration
 * @param source
 * @param moduleSpecifier e.g. 'ts-morph' in import { SourceFile } from 'ts-morph'
 * @example
 */
export function checkIsNamespaceImportDeclaration(
  importSpec: ImportDeclaration
): boolean {
  return Boolean(importSpec.getNamespaceImport());
}
/**
 * Check is Import Declaration named import - by Import Declaration
 * @param source
 * @param moduleSpecifier
 * @example
 */
export function checkIsNamedImportDeclaration(
  importSpec: ImportDeclaration
): boolean {
  return Boolean(importSpec.getNamedImports().length);
}

/**
 * Get Import Type  - by Module Specifier
 * @param source
 * @param moduleSpecifier
 * @returns ImportType
 */
export function checkImportTypeBySpecifier(
  source: SourceFile,
  moduleSpecifier: string
): ImportType {
  return checkIsDefaultImportBySpecifier(source, moduleSpecifier)
    ? ImportType.DEFAULT_IMPORT
    : checkIsNamedImportBySpecifier(source, moduleSpecifier)
    ? ImportType.NAMED_IMPORTS
    : ImportType.NAMESPACE_IMPORT;
}

/**
 * Get Import Type  - by Import Declaration
 * @param source
 * @returns
 */
export function checkImportTypeByDec(
  declaration: ImportDeclaration
): ImportType {
  return checkIsDefaultImportDeclaration(declaration)
    ? ImportType.DEFAULT_IMPORT
    : checkIsNamedImportDeclaration(declaration)
    ? ImportType.NAMED_IMPORTS
    : ImportType.NAMESPACE_IMPORT;
}

/**
 * Check is Import Declaration type only - by Module Specifier
 * @param source
 * @param moduleSpecifier
 * @returns
 */
export function checkIsTypeOnlyImportBySpecifier(
  source: SourceFile,
  moduleSpecifier: string
): boolean | undefined {
  if (!getImportModuleSpecifiers(source).includes(moduleSpecifier)) {
    return undefined;
  }

  return getImportDeclarations(source, moduleSpecifier).isTypeOnly();
}
