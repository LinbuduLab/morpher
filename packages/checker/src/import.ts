import { ImportDeclaration, SourceFile, SyntaxKind } from "ts-morph";
import {
  getImportDeclaration,
  getImportDeclarationModuleSpecifier,
} from "@ts-morpher/helper";
import { ImportType } from "@ts-morpher/types";

/**
 * Check does Import Declaration exist in current source file - by module specifier
 * @param source
 * @param moduleSpecifier
 * @example
 */
export function checkImportDeclarationExistBySpecifier(
  source: SourceFile,
  moduleSpecifier: string
): boolean {
  return getImportDeclarationModuleSpecifier(source).includes(moduleSpecifier);
}

/**
 * Check does Import Declaration exist in current source file - by Import Declaration
 * @param source
 * @param moduleSpecifier
 * @example
 */
export function checkImportExistByDec(
  source: SourceFile,
  declaration: ImportDeclaration
): boolean {
  return getImportDeclaration(source).includes(declaration);
}

/**
 * Check dose Source File has Import Declaration
 * @param source
 * @param moduleSpecifier
 * @example
 */
export function hasImportDeclaration(source: SourceFile): boolean {
  return Boolean(getImportDeclaration(source).length);
}

/**
 * Check is Import Declaration default import - by module specifier
 * @param source
 * @param moduleSpecifier
 * @example
 */
export function checkIsDefaultImportByModuleSpecifier(
  source: SourceFile,
  specifier: string
): boolean {
  return checkIsDefaultImportByDeclaration(
    getImportDeclaration(source, specifier)
  );
}

/**
 * Check is Import Declaration namespace import - by module specifier
 * @param source
 * @param moduleSpecifier
 * @example
 */
export function checkIsNamespaceImportByModuleSpecifier(
  source: SourceFile,
  specifier: string
): boolean {
  return checkIsNamespaceImportByDeclaration(
    getImportDeclaration(source, specifier)
  );
}

/**
 * Check is Import Declaration named import - by module specifier
 * @param source
 * @param moduleSpecifier
 * @example
 */
export function checkIsNamedImportByModuleSpecifier(
  source: SourceFile,
  specifier: string
): boolean {
  return checkIsNamedImportByDeclaration(
    getImportDeclaration(source, specifier)
  );
}

/**
 * Check is Import Declaration default import - by Import Declaration
 * @param source
 * @param moduleSpecifier
 * @example
 */
export function checkIsDefaultImportByDeclaration(
  importSpec: ImportDeclaration | undefined
): boolean {
  return Boolean(importSpec?.getDefaultImport());
}

/**
 * Check is Import Declaration namespace import - by Import Declaration
 * @param source
 * @param moduleSpecifier
 * @example
 */
export function checkIsNamespaceImportByDeclaration(
  importSpec: ImportDeclaration | undefined
): boolean {
  return Boolean(importSpec?.getNamespaceImport());
}

/**
 * Check is Import Declaration named import - by Import Declaration
 * @param source
 * @param moduleSpecifier
 * @example
 */
export function checkIsNamedImportByDeclaration(
  importSpec: ImportDeclaration | undefined
): boolean {
  return Boolean(importSpec?.getNamedImports().length);
}

/**
 * Get Import Type  - by module specifier
 * @param source
 * @param specifier
 * @returns ImportType
 */
export function checkImportTypeByModuleSpecifier(
  source: SourceFile,
  specifier: string
): ImportType {
  return checkIsDefaultImportByModuleSpecifier(source, specifier)
    ? ImportType.DEFAULT_IMPORT
    : checkIsNamedImportByModuleSpecifier(source, specifier)
    ? ImportType.NAMED_IMPORTS
    : ImportType.NAMESPACE_IMPORT;
}

/**
 * Get Import Type  - by Import Declaration
 * @param source
 * @param specifier
 * @returns
 */
export function checkImportTypeByDec(
  declaration: ImportDeclaration
): ImportType {
  return checkIsDefaultImportByDeclaration(declaration)
    ? ImportType.DEFAULT_IMPORT
    : checkIsNamedImportByDeclaration(declaration)
    ? ImportType.NAMED_IMPORTS
    : ImportType.NAMESPACE_IMPORT;
}
