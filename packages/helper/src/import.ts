import { ImportDeclaration, SourceFile, SyntaxKind } from "ts-morph";
import { getDeclarationIdentifier, MaybyArray } from "./util";

/**
 * Split one `Import Declaration` into common one and type-only one
 * - return undefined if no named imports exist
 * - retrun [OriginImportDeclaration] if no typeImports exist in current named imports
 * @param source
 * @param moduleSpecifier
 * @param typeImports
 * @returns
 */
export function splitImportDeclarationBasedOnType(
  source: SourceFile,
  moduleSpecifier: string,
  typeImports: string[]
): [ImportDeclaration] | [ImportDeclaration, ImportDeclaration] | undefined {
  const targetImport = getImportDeclarations(source, moduleSpecifier);
  const namedImports = targetImport.getNamedImports().map((i) => i.getText());

  if (!namedImports.length) return;

  const existTypeOnlyImports = typeImports.filter((typeImport) =>
    namedImports.includes(typeImport)
  );

  if (!existTypeOnlyImports.length) return [targetImport];

  const getTypeOnlyImportDeclaration = source.addImportDeclaration({
    namedImports: existTypeOnlyImports,
    isTypeOnly: true,
    moduleSpecifier,
  });

  targetImport.removeNamedImports();

  targetImport.addNamedImports(
    namedImports.filter((named) => !existTypeOnlyImports.includes(named))
  );

  return [targetImport, getTypeOnlyImportDeclaration];
}

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

/**
 * Return all type-only import declarations
 * @param source
 */
export function getTypeOnlyImportDeclarations(
  source: SourceFile
): ImportDeclaration[] {
  const importDeclarations = getImportDeclarations(source);
  return importDeclarations.filter((dec) => dec.isTypeOnly());
}

/**
 * Return all type-only import module specifiers.
 * @param source
 */
export function getTypeOnlyImportModuleSpecifiers(
  source: SourceFile
): string[] {
  return getTypeOnlyImportDeclarations(source).map((i) =>
    i.getModuleSpecifierValue()
  );
}
