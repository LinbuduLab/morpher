import { ImportDeclaration, SourceFile, SyntaxKind } from "ts-morph";
import { getDeclarationIdentifier, MaybyArray } from "./util";

/**
 * Return all import declarations, specify `moduleSpecifier` to return only matched.
 * @param source
 * @param moduleSpecifier
 * @returns ImportDeclaration | ImportDeclaration[] | undefined
 */
export function getImportDeclarations(source: SourceFile): ImportDeclaration[];

/**
 * Return all import declarations, specify `moduleSpecifier` to return only matched.
 * @param source
 * @param moduleSpecifier
 * @returns ImportDeclaration | ImportDeclaration[] | undefined
 */
export function getImportDeclarations(
  source: SourceFile,
  moduleSpecifier: string
): ImportDeclaration | undefined;

/**
 * Return all import declarations, specify `moduleSpecifier` to return only matched.
 * @param source
 * @param moduleSpecifier
 * @returns ImportDeclaration | ImportDeclaration[] | undefined
 */
export function getImportDeclarations(
  source: SourceFile,
  moduleSpecifier: string[]
): ImportDeclaration[] | undefined;

/**
 * Return all import declarations, specify `moduleSpecifier` to return only matched.
 * @param source
 * @param moduleSpecifier
 * @returns ImportDeclaration | ImportDeclaration[] | undefined
 */
export function getImportDeclarations(
  source: SourceFile,
  moduleSpecifier?: string | string[]
): MaybyArray<ImportDeclaration> | undefined {
  const importDeclarations = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    ?.getChildrenOfKind(SyntaxKind.ImportDeclaration);

  return moduleSpecifier
    ? Array.isArray(moduleSpecifier)
      ? importDeclarations.filter((dec) =>
          moduleSpecifier.includes(getDeclarationIdentifier(dec))
        )
      : importDeclarations.find((dec) =>
          moduleSpecifier.includes(getDeclarationIdentifier(dec))
        )
    : importDeclarations;
}

/**
 * Return all import module specifiers.
 * @param source
 * @returns string[]
 */
export function getImportModuleSpecifiers(source: SourceFile): string[] {
  return getImportDeclarations(source).map((i) => i.getModuleSpecifierValue());
}
