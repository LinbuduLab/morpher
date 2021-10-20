import {
  InterfaceDeclaration,
  SourceFile,
  SyntaxKind,
  TypeAliasDeclaration,
  VariableStatement,
} from "ts-morph";
import {
  getVariableIdentifier,
  MaybeArray,
  getTypeOrInterfaceIdentifier,
} from "./util";

/**
 * Return all export var statementss identifiers.
 * @param source SourceFile
 */
export function getExportVariableIdentifiers(source: SourceFile): string[] {
  return getExportVariableStatements(source).map((statement) =>
    getVariableIdentifier(statement)
  );
}

/**
 * Return all export statements, specify `varIdentifier` to return only matched.
 * @param source SourceFile
 * @returns VariableStatement {@link VariableStatement}
 */
export function getExportVariableStatements(
  source: SourceFile
): VariableStatement[];

/**
 * Return all export statements, specify `varIdentifier` to return only matched.
 * @param source SourceFile
 * @param varIdentifier
 * @returns VariableStatement {@link VariableStatement}
 */
export function getExportVariableStatements(
  source: SourceFile,
  varIdentifier: string
): VariableStatement | undefined;

/**
 * Return all export statements, specify `varIdentifier` to return only matched.
 * @param source SourceFile
 * @param varIdentifier
 * @returns VariableStatement {@link VariableStatement}
 */
export function getExportVariableStatements(
  source: SourceFile,
  varIdentifier: string[]
): VariableStatement[];

/**
 * Return all export statements, specify `varIdentifier` to return only matched.
 * @param source SourceFile
 * @param varIdentifier
 * @returns VariableStatement {@link VariableStatement}
 */
export function getExportVariableStatements(
  source: SourceFile,
  varIdentifier?: string | string[]
): MaybeArray<VariableStatement> | undefined {
  const topLevelVarStatements = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    .getChildrenOfKind(SyntaxKind.VariableStatement)
    .filter((v) => v.isExported());

  return varIdentifier
    ? Array.isArray(varIdentifier)
      ? topLevelVarStatements.filter((statement) =>
          varIdentifier.includes(getVariableIdentifier(statement))
        )
      : topLevelVarStatements.find(
          (statement) => getVariableIdentifier(statement) === varIdentifier
        )
    : topLevelVarStatements;
}

/**
 * Get exported TypeAliasDeclaration, specify identifier to return only matched.
 * @param source SourceFile
 * @returns TypeAliasDeclaration {@link TypeAliasDeclaration}
 */
export function getTypeExportDeclaration(
  source: SourceFile
): TypeAliasDeclaration[];

/**
 * Get exported TypeAliasDeclaration, specify identifier to return only matched.
 * @param source SourceFile
 * @param identifier 'Foo' in export type Foo = string;
 * @returns TypeAliasDeclaration {@link TypeAliasDeclaration}
 */
export function getTypeExportDeclaration(
  source: SourceFile,
  identifier: string
): TypeAliasDeclaration;

/**
 * Get exported TypeAliasDeclaration, specify identifier to return only matched.
 * @param source SourceFile
 * @param identifier 'Foo' in export type Foo = string;
 * @returns TypeAliasDeclaration {@link TypeAliasDeclaration}
 */
export function getTypeExportDeclaration(
  source: SourceFile,
  identifiers: string[]
): TypeAliasDeclaration[];

/**
 * Get exported TypeAliasDeclaration, specify identifier to return only matched.
 * @param source SourceFile
 * @param identifier 'Foo' in `export type Foo = string;`
 * @returns TypeAliasDeclaration {@link TypeAliasDeclaration}
 */
export function getTypeExportDeclaration(
  source: SourceFile,
  identifier?: MaybeArray<string>
): MaybeArray<TypeAliasDeclaration> | undefined {
  const typeAliasDeclarationList = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    .getChildrenOfKind(SyntaxKind.TypeAliasDeclaration)
    .filter((type) => type.isExported());

  return identifier
    ? Array.isArray(identifier)
      ? typeAliasDeclarationList.filter((declaration) =>
          identifier.includes(getTypeOrInterfaceIdentifier(declaration))
        )
      : typeAliasDeclarationList.find(
          (declaration) =>
            getTypeOrInterfaceIdentifier(declaration) === identifier
        )
    : typeAliasDeclarationList;
}

/**
 * Return all identifier of type alias exported.
 * @param source SourceFile
 * @returns
 */
export function getTypeExportIdentifiers(source: SourceFile): string[] {
  return getTypeExportDeclaration(source).map((declaration) =>
    getTypeOrInterfaceIdentifier(declaration)
  );
}

/**
 * Get exported InterfaceDeclaration, specify identifier to return only matched.
 * @param source SourceFile
 */
export function getInterfaceExportDeclaration(
  source: SourceFile
): InterfaceDeclaration[];

/**
 * Get exported InterfaceDeclaration, specify identifier to return only matched.
 * @param source SourceFile
 * @param identifier 'Foo' in `export interface Foo {};`
 */
export function getInterfaceExportDeclaration(
  source: SourceFile,
  identifier: string
): InterfaceDeclaration;

/**
 * Get exported InterfaceDeclaration, specify identifier to return only matched.
 * @param source SourceFile
 * @param identifier 'Foo' in `export interface Foo {}`;
 */
export function getInterfaceExportDeclaration(
  source: SourceFile,
  identifiers: string[]
): InterfaceDeclaration[];

/**
 * Get exported InterfaceDeclaration, specify identifier to return only matched.
 * @param source SourceFile
 * @param identifier 'Foo' in `export interface Foo {};`
 */
export function getInterfaceExportDeclaration(
  source: SourceFile,
  identifier?: MaybeArray<string>
): MaybeArray<InterfaceDeclaration> | undefined {
  const interfaceDeclarationList = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    .getChildrenOfKind(SyntaxKind.InterfaceDeclaration)
    .filter((inf) => inf.isExported());

  return identifier
    ? Array.isArray(identifier)
      ? interfaceDeclarationList.filter((declaration) =>
          identifier.includes(getTypeOrInterfaceIdentifier(declaration))
        )
      : interfaceDeclarationList.find(
          (declaration) =>
            getTypeOrInterfaceIdentifier(declaration) === identifier
        )
    : interfaceDeclarationList;
}

/**
 * Return all identifier of interface exported.
 * @param source SourceFile
 * @returns
 */
export function getInterfaceExportIdentifiers(source: SourceFile): string[] {
  return getInterfaceExportDeclaration(source).map((identifier) =>
    getTypeOrInterfaceIdentifier(identifier)
  );
}
