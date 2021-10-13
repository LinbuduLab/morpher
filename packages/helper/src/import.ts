import { ImportDeclaration, SourceFile, SyntaxKind } from "ts-morph";
import { builtinModules } from "module";
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
  moduleSpecifier?: MaybyArray<string>
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
): ImportDeclaration[];

export function getTypeOnlyImportDeclarations(
  source: SourceFile,
  moduleSpecifier: string
): ImportDeclaration | undefined;

export function getTypeOnlyImportDeclarations(
  source: SourceFile,
  moduleSpecifiers: string[]
): ImportDeclaration[];

/**
 * Return type-only import declarations, specify `identifier` to return only matched
 * @param source
 */
export function getTypeOnlyImportDeclarations(
  source: SourceFile,
  moduleSpecifier?: MaybyArray<string>
): MaybyArray<ImportDeclaration> | undefined {
  const typeOnlyImportDeclarations = getImportDeclarations(source).filter(
    (dec) => dec.isTypeOnly()
  );

  return moduleSpecifier
    ? Array.isArray(moduleSpecifier)
      ? typeOnlyImportDeclarations.filter((dec) =>
          moduleSpecifier.includes(getDeclarationIdentifier(dec))
        )
      : typeOnlyImportDeclarations.find((dec) =>
          moduleSpecifier.includes(getDeclarationIdentifier(dec))
        )
    : typeOnlyImportDeclarations;
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

/**
 * Return all named import declarations
 * @param source
 * @returns
 */
export function getNamedImportDeclarations(
  source: SourceFile
): ImportDeclaration[] {
  const importDeclarations = getImportDeclarations(source);

  return importDeclarations.filter((declaration) =>
    Boolean(declaration.getNamedImports().length)
  );
}

/**
 * Return all named import declarations module specifier
 * @param source
 * @returns
 */
export function getNamedImportModuleSpecifiers(source: SourceFile): string[] {
  return getNamedImportDeclarations(source).map((i) =>
    i.getModuleSpecifierValue()
  );
}

/**
 * Return all namespace import declarations
 * @param source
 * @returns
 */
export function getNamespaceImportDeclarations(
  source: SourceFile
): ImportDeclaration[] {
  const importDeclarations = getImportDeclarations(source);

  return importDeclarations.filter((declaration) =>
    Boolean(declaration.getNamespaceImport())
  );
}

/**
 * Return all namespace import declarations module specifier
 * @param source
 * @returns
 */
export function getNamespaceImportModuleSpecifiers(
  source: SourceFile
): string[] {
  return getNamespaceImportDeclarations(source).map((i) =>
    i.getModuleSpecifierValue()
  );
}

/**
 * Return all default import declarations
 * @param source
 * @returns
 */
export function getDefaultImportDeclarations(
  source: SourceFile
): ImportDeclaration[] {
  const importDeclarations = getImportDeclarations(source);

  return importDeclarations.filter((declaration) =>
    Boolean(declaration.getDefaultImport())
  );
}

/**
 * Return all default import declarations module specifier
 * @param source
 * @returns
 */
export function getDefaultImportModuleSpecifiers(source: SourceFile): string[] {
  return getDefaultImportDeclarations(source).map((i) =>
    i.getModuleSpecifierValue()
  );
}

/**
 * Return all built-in module import declarations
 * @param source
 * @returns
 */
export function getNodeInternalImportDeclarations(source: SourceFile) {
  return getImportDeclarations(source).filter((i) =>
    builtinModules.includes(i.getModuleSpecifierValue())
  );
}

/**
 * Return all built-in module import module specifiers
 * @param source
 * @returns
 */
export function getNodeInternalImportModuleSpecifiers(source: SourceFile) {
  return getImportModuleSpecifiers(source).filter((spc) =>
    builtinModules.includes(spc)
  );
}

/**
 * Return all non-built-in module import declarations
 * @param source
 * @returns
 */
export function getNodeModuleImportDeclarations(source: SourceFile) {
  return getImportDeclarations(source).filter(
    (i) => !builtinModules.includes(i.getModuleSpecifierValue())
  );
}

/**
 * Return all non-built-in module import module specifiers
 * @param source
 * @returns
 */
export function getNodeModuleImportModuleSpecifiers(source: SourceFile) {
  return getImportModuleSpecifiers(source).filter(
    (spc) => !builtinModules.includes(spc)
  );
}
