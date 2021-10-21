import { ImportDeclaration, SourceFile } from "ts-morph";
import {
  getImportDeclarations,
  getImportModuleSpecifiers,
} from "@ts-morpher/helper";
import { ImportType } from "@ts-morpher/types";

/**
 * Check does `Import Declaration` exist - by Module Specifier.
 * @param source
 * @param moduleSpecifier 'ts-morph' in import { SourceFile } from 'ts-morph'
 * @example
 */
export function checkImportExistByModuleSpecifier(
  source: SourceFile,
  moduleSpecifier: string
): boolean {
  return getImportModuleSpecifiers(source).includes(moduleSpecifier);
}

/**
 * Check dose Source File has `Import Declaration` defined.
 * @param source
 * @example
 */
export function checkSourceFileHasImports(source: SourceFile): boolean {
  return Boolean(getImportDeclarations(source).length);
}

/**
 * Check is `Import Declaration` default import - by `Module Specifier`.
 * @param source
 * @param moduleSpecifier 'ts-morph' in import { SourceFile } from 'ts-morph'
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
 * Check is `Import Declaration` namespace import - by `Module Specifier`.
 * @param source
 * @param moduleSpecifier 'ts-morph' in import { SourceFile } from 'ts-morph'
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
 * Check is `Import Declaration` named import - by `Module Specifier`.
 * @param source
 * @param moduleSpecifier 'ts-morph' in import { SourceFile } from 'ts-morph'
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
 * Check is `Import Declaration` default with named import - by `Module Specifier`.
 * @param source
 * @param moduleSpecifier 'ts-morph' in import { SourceFile } from 'ts-morph'
 */
export function checkIsDefaultWithNamedImportByModuleSpecifier(
  source: SourceFile,
  moduleSpecifier: string
): boolean {
  return checkIsDefaultWithNamedImportDeclaration(
    getImportDeclarations(source, moduleSpecifier)
  );
}

/**
 * Check is `Import Declaration` default import - by `Import Declaration`.
 * @param source
 * @param moduleSpecifier 'ts-morph' in import { SourceFile } from 'ts-morph'
 */
export function checkIsDefaultImportDeclaration(
  importSpec: ImportDeclaration
): boolean {
  return Boolean(importSpec.getDefaultImport());
}

/**
 * Check is `Import Declaration` namespace import - by `Import Declaration`.
 * @param source
 * @param moduleSpecifier 'ts-morph' in import { SourceFile } from 'ts-morph'
 * @example
 */
export function checkIsNamespaceImportDeclaration(
  importSpec: ImportDeclaration
): boolean {
  return Boolean(importSpec.getNamespaceImport());
}

/**
 * Check is `Import Declaration` named import - by `Import Declaration`.
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
 * Check is `Import Declaration` default with named import - by `Import Declaration`.
 * @param source
 * @param moduleSpecifier
 * @example
 */
export function checkIsDefaultWithNamedImportDeclaration(
  importSpec: ImportDeclaration
): boolean {
  return (
    Boolean(importSpec.getNamedImports().length) &&
    Boolean(importSpec.getDefaultImport())
  );
}

/**
 * Check Import Type  - by `Module Specifier`.
 * @param source
 * @param moduleSpecifier
 * @returns ImportType {@link ImportType}
 */
export function checkImportTypeByModuleSpecifier(
  source: SourceFile,
  moduleSpecifier: string
): ImportType {
  const isNamespaceImport = checkIsNamespaceImportByModuleSpecifier(
    source,
    moduleSpecifier
  );

  if (isNamespaceImport) {
    return ImportType.NAMESPACE_IMPORT;
  }

  const isNamedImport = checkIsNamedImportByModuleSpecifier(
    source,
    moduleSpecifier
  );
  const isDefaultImport = checkIsDefaultImportByModuleSpecifier(
    source,
    moduleSpecifier
  );

  return isNamedImport && isDefaultImport
    ? ImportType.DEFAULT_WITH_NAMED_IMPORT
    : isNamedImport
    ? ImportType.NAMED_IMPORT
    : ImportType.DEFAULT_IMPORT;
}

/**
 * Get `Import Type`  - by `Import Declaration`.
 * @param source
 * @returns ImportType {@link ImportType}
 */
export function checkImportType(declaration: ImportDeclaration): ImportType {
  const isNamespaceImport = checkIsNamespaceImportDeclaration(declaration);

  if (isNamespaceImport) {
    return ImportType.NAMESPACE_IMPORT;
  }

  const isNamedImport = checkIsNamedImportDeclaration(declaration);

  const isDefaultImport = checkIsDefaultImportDeclaration(declaration);

  return isNamedImport && isDefaultImport
    ? ImportType.DEFAULT_WITH_NAMED_IMPORT
    : isNamedImport
    ? ImportType.NAMED_IMPORT
    : isDefaultImport
    ? ImportType.DEFAULT_IMPORT
    : ImportType.DIRECTLY_IMPORT;
}

/**
 * Check is `Import Declaration` type only - by `Module Specifier`.
 * @param source
 * @param moduleSpecifier
 * @returns
 */
export function checkIsTypeOnlyImportByModuleSpecifier(
  source: SourceFile,
  moduleSpecifier: string
): boolean | undefined {
  return getImportDeclarations(source, moduleSpecifier).isTypeOnly();
}
