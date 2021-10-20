import { ImportDeclaration, SourceFile, SyntaxKind } from "ts-morph";
import { builtinModules } from "module";
import { getDeclarationIdentifierByKind, MaybeArray, uniqArray } from "./util";

/**
 * Return all import declarations, specify `moduleSpecifier` to return only matched.
 * @param source SourceFile
 * @param moduleSpecifier
 * @returns ImportDeclaration {@link ImportDeclaration}
 */
export function getImportDeclarations(source: SourceFile): ImportDeclaration[];

/**
 * Return all import declarations, specify `moduleSpecifier` to return only matched.
 * @param source SourceFile
 * @param moduleSpecifier
 * @returns ImportDeclaration {@link ImportDeclaration}
 */
export function getImportDeclarations(
  source: SourceFile,
  moduleSpecifier: string
): ImportDeclaration | undefined;

/**
 * Return all import declarations, specify `moduleSpecifier` to return only matched.
 * @param source SourceFile
 * @param moduleSpecifier
 * @returns ImportDeclaration {@link ImportDeclaration}
 */
export function getImportDeclarations(
  source: SourceFile,
  moduleSpecifier: string[]
): ImportDeclaration[];

/**
 * Return all import declarations, specify `moduleSpecifier` to return only matched.
 * @param source SourceFile
 * @param moduleSpecifier
 * @returns ImportDeclaration {@link ImportDeclaration}
 */
export function getImportDeclarations(
  source: SourceFile,
  moduleSpecifier?: MaybeArray<string>
): MaybeArray<ImportDeclaration> | undefined {
  const importDeclarations = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    ?.getChildrenOfKind(SyntaxKind.ImportDeclaration);

  if (!importDeclarations.length) {
    return moduleSpecifier
      ? Array.isArray(moduleSpecifier)
        ? []
        : undefined
      : [];
  }

  return moduleSpecifier
    ? Array.isArray(moduleSpecifier)
      ? importDeclarations.filter((dec) =>
          moduleSpecifier.includes(getDeclarationIdentifierByKind(dec))
        )
      : importDeclarations.find((dec) =>
          moduleSpecifier.includes(getDeclarationIdentifierByKind(dec))
        )
    : importDeclarations;
}

/**
 * Return all import module specifiers.
 * @param source SourceFile
 * @returns string[]
 */
export function getImportModuleSpecifiers(source: SourceFile): string[] {
  return uniqArray(
    getImportDeclarations(source).map((i) => i.getModuleSpecifierValue())
  );
}

/**
 * Return all type-only import declarations
 * @param source SourceFile
 * @returns ImportDeclaration {@link ImportDeclaration}
 */
export function getTypeOnlyImportDeclarations(
  source: SourceFile
): ImportDeclaration[];

/**
 * Return type-only import declarations, specify `identifier` to return only matched.
 * @param source SourceFile
 * @param moduleSpecifier
 * @returns ImportDeclaration {@link ImportDeclaration}
 */
export function getTypeOnlyImportDeclarations(
  source: SourceFile,
  moduleSpecifier: string
): ImportDeclaration | undefined;

/**
 * Return type-only import declarations, specify `identifier` to return only matched.
 * @param source SourceFile
 * @param moduleSpecifier
 * @returns ImportDeclaration {@link ImportDeclaration}
 */
export function getTypeOnlyImportDeclarations(
  source: SourceFile,
  moduleSpecifiers: string[]
): ImportDeclaration[];

/**
 * Return type-only import declarations, specify `identifier` to return only matched.
 * @param source SourceFile
 * @param moduleSpecifier
 * @returns ImportDeclaration {@link ImportDeclaration}
 */
export function getTypeOnlyImportDeclarations(
  source: SourceFile,
  moduleSpecifier?: MaybeArray<string>
): MaybeArray<ImportDeclaration> | undefined {
  const typeOnlyImportDeclarations = getImportDeclarations(source).filter(
    (dec) => dec.isTypeOnly()
  );

  return moduleSpecifier
    ? Array.isArray(moduleSpecifier)
      ? typeOnlyImportDeclarations.filter((dec) =>
          moduleSpecifier.includes(getDeclarationIdentifierByKind(dec))
        )
      : typeOnlyImportDeclarations.find((dec) =>
          moduleSpecifier.includes(getDeclarationIdentifierByKind(dec))
        )
    : typeOnlyImportDeclarations;
}

/**
 * Return all type-only import module specifiers.
 * @param source SourceFile
 */
export function getTypeOnlyImportModuleSpecifiers(
  source: SourceFile
): string[] {
  return uniqArray(
    getTypeOnlyImportDeclarations(source).map((i) =>
      i.getModuleSpecifierValue()
    )
  );
}

/**
 * Return all named import declarations.
 * @param source SourceFile
 * @returns ImportDeclaration {@link ImportDeclaration}
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
 * Return all named import declarations module specifier.
 * @param source SourceFile
 * @returns
 */
export function getNamedImportModuleSpecifiers(source: SourceFile): string[] {
  return uniqArray(
    getNamedImportDeclarations(source).map((i) => i.getModuleSpecifierValue())
  );
}

/**
 * Return all namespace import declarations.
 * @param source SourceFile
 * @returns ImportDeclaration {@link ImportDeclaration}
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
 * Return all namespace import declarations module specifier.
 * @param source SourceFile
 * @returns ImportDeclaration {@link ImportDeclaration}
 */
export function getNamespaceImportModuleSpecifiers(
  source: SourceFile
): string[] {
  return uniqArray(
    getNamespaceImportDeclarations(source).map((i) =>
      i.getModuleSpecifierValue()
    )
  );
}

/**
 * Return all default import declarations.
 * @param source SourceFile
 * @returns ImportDeclaration {@link ImportDeclaration}
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
  return uniqArray(
    getDefaultImportDeclarations(source).map((i) => i.getModuleSpecifierValue())
  );
}

/**
 * Return all built-in module import declarations
 * @param source SourceFile
 * @returns
 */
export function getNodeInternalImportDeclarations(source: SourceFile) {
  return getImportDeclarations(source).filter((i) =>
    builtinModules.includes(i.getModuleSpecifierValue())
  );
}

/**
 * Return all built-in module import module specifiers
 * @param source SourceFile
 * @returns
 */
export function getNodeInternalImportModuleSpecifiers(
  source: SourceFile
): string[] {
  return uniqArray(
    getImportModuleSpecifiers(source).filter((spc) =>
      builtinModules.includes(spc)
    )
  );
}

/**
 * Return all non-built-in module import declarations
 * @param source SourceFile
 * @returns ImportDeclaration {@link ImportDeclaration}
 */
export function getNodeModuleImportDeclarations(
  source: SourceFile
): ImportDeclaration[] {
  return getImportDeclarations(source).filter(
    (i) => !builtinModules.includes(i.getModuleSpecifierValue())
  );
}

/**
 * Return all non-built-in module import module specifiers.
 * @param source SourceFile
 */
export function getNodeModuleImportModuleSpecifiers(
  source: SourceFile
): string[] {
  return uniqArray(
    getImportModuleSpecifiers(source).filter(
      (spc) => !builtinModules.includes(spc)
    )
  );
}
