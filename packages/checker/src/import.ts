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
export function checkImportExistByModuleSpecifier(
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
export function checkIsDefaultImportByModuleSpecifier(
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
export function checkIsNamespaceImportByModuleSpecifier(
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
export function checkIsNamedImportByModuleSpecifier(
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
export function checkImportTypeByModuleSpecifier(
  source: SourceFile,
  moduleSpecifier: string
): ImportType {
  return checkIsDefaultImportByModuleSpecifier(source, moduleSpecifier)
    ? ImportType.DEFAULT_IMPORT
    : checkIsNamedImportByModuleSpecifier(source, moduleSpecifier)
    ? ImportType.NAMED_IMPORTS
    : ImportType.NAMESPACE_IMPORT;
}

/**
 * Get Import Type  - by Import Declaration
 * @param source
 * @returns
 */
export function checkImportType(
  declaration: ImportDeclaration
): ImportType | undefined {
  return checkIsDefaultImportDeclaration(declaration)
    ? ImportType.DEFAULT_IMPORT
    : checkIsNamedImportDeclaration(declaration)
    ? ImportType.NAMED_IMPORTS
    : checkIsNamespaceImportDeclaration(declaration)
    ? ImportType.NAMESPACE_IMPORT
    : undefined;
}

/**
 * Check is Import Declaration type only - by Module Specifier
 * @param source
 * @param moduleSpecifier
 * @returns
 */
export function checkIsTypeOnlyImportByModuleSpecifier(
  source: SourceFile,
  moduleSpecifier: string
): boolean | undefined {
  if (!getImportModuleSpecifiers(source).includes(moduleSpecifier)) {
    return undefined;
  }

  return getImportDeclarations(source, moduleSpecifier).isTypeOnly();
}
