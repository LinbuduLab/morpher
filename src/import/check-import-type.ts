import { ImportDeclaration, SourceFile, SyntaxKind } from "ts-morph";
import { getImportDeclaration } from "./get-import-declaration";

export function checkIsDefaultImportByModuleSpecifier(
  source: SourceFile,
  specifier: string
): boolean {
  return checkIsDefaultImportByDeclaration(
    getImportDeclaration(source, specifier)
  );
}

export function checkIsNamespaceImportByModuleSpecifier(
  source: SourceFile,
  specifier: string
): boolean {
  return checkIsNamespaceImportByDeclaration(
    getImportDeclaration(source, specifier)
  );
}

export function checkIsNamedImportByModuleSpecifier(
  source: SourceFile,
  specifier: string
): boolean {
  return checkIsNamedImportByDeclaration(
    getImportDeclaration(source, specifier)
  );
}

export function checkIsDefaultImportByDeclaration(
  importSpec: ImportDeclaration | undefined
): boolean {
  return Boolean(importSpec?.getDefaultImport());
}

export function checkIsNamespaceImportByDeclaration(
  importSpec: ImportDeclaration | undefined
): boolean {
  return Boolean(importSpec?.getNamespaceImport());
}

export function checkIsNamedImportByDeclaration(
  importSpec: ImportDeclaration | undefined
): boolean {
  return Boolean(importSpec?.getNamedImports().length);
}
