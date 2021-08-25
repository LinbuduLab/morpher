import { ImportDeclaration, SourceFile, SyntaxKind } from "ts-morph";
import { getImportDec, getImportDecModSpecList } from "@ts-morpher/helper";
import { ImportType } from "@ts-morpher/types";

/**
 * Check does Import Declaration exist in current source file - by module specifier
 * @param source
 * @param moduleSpecifier
 * @example
 */
export function checkImportExistByModSpec(
  source: SourceFile,
  moduleSpecifier: string
): boolean {
  return getImportDecModSpecList(source).includes(moduleSpecifier);
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
  return getImportDec(source).includes(declaration);
}

/**
 * Check dose Source File has Import Declaration
 * @param source
 * @param moduleSpecifier
 * @example
 */
export function hasImportDec(source: SourceFile): boolean {
  return Boolean(getImportDec(source).length);
}

/**
 * Check is Import Declaration default import - by module specifier
 * @param source
 * @param moduleSpecifier
 * @example
 */
export function checkIsDefaultImportByModSpec(
  source: SourceFile,
  specifier: string
): boolean {
  return checkIsDefaultImportByDec(getImportDec(source, specifier));
}

/**
 * Check is Import Declaration namespace import - by module specifier
 * @param source
 * @param moduleSpecifier
 * @example
 */
export function checkIsNamespaceImportByModSpec(
  source: SourceFile,
  specifier: string
): boolean {
  return checkIsNamespaceImportByDec(getImportDec(source, specifier));
}

/**
 * Check is Import Declaration named import - by module specifier
 * @param source
 * @param moduleSpecifier
 * @example
 */
export function checkIsNamedImportByModSpec(
  source: SourceFile,
  specifier: string
): boolean {
  return checkIsNamedImportByDec(getImportDec(source, specifier));
}

/**
 * Check is Import Declaration default import - by Import Declaration
 * @param source
 * @param moduleSpecifier
 * @example
 */
export function checkIsDefaultImportByDec(
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
export function checkIsNamespaceImportByDec(
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
export function checkIsNamedImportByDec(
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
export function checkImportTypeByModSpec(
  source: SourceFile,
  specifier: string
): ImportType {
  return checkIsDefaultImportByModSpec(source, specifier)
    ? ImportType.DEFAULT_IMPORT
    : checkIsNamedImportByModSpec(source, specifier)
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
  return checkIsDefaultImportByDec(declaration)
    ? ImportType.DEFAULT_IMPORT
    : checkIsNamedImportByDec(declaration)
    ? ImportType.NAMED_IMPORTS
    : ImportType.NAMESPACE_IMPORT;
}

/**
 * Check is Import Declaration type only - by module specifier
 * @param source
 * @param moduleSpecifier
 * @returns
 */
export function checkIsTypeOnlyImportBySpecifier(
  source: SourceFile,
  moduleSpecifier: string
): boolean | undefined {
  if (!getImportDecModSpecList(source).includes(moduleSpecifier)) {
    return undefined;
  }

  return getImportDec(source, moduleSpecifier).isTypeOnly();
}
