import {
  InterfaceDeclaration,
  SourceFile,
  SyntaxKind,
  TypeAliasDeclaration,
  VariableStatement,
} from "ts-morph";
import { getTypeOrInterfaceIdentifier } from ".";
import { getVariableIdentifier, MaybyArray } from "./util";

/**
 * Return all export statements, specify `varIdentifier` to return only matched
 * @param source
 * @param varIdentifier
 * @returns
 */
export function getExportVariableStatements(
  source: SourceFile
): VariableStatement[];

/**
 * Return all export statements, specify `varIdentifier` to return only matched
 * @param source
 * @param varIdentifier
 * @returns
 */
export function getExportVariableStatements(
  source: SourceFile,
  varIdentifier: string
): VariableStatement;

/**
 * Return all export statements, specify `varIdentifier` to return only matched
 * @param source
 * @param varIdentifier
 * @returns
 */
export function getExportVariableStatements(
  source: SourceFile,
  varIdentifier: string[]
): VariableStatement;

/**
 * Return all export statements, specify `varIdentifier` to return only matched
 * @param source
 * @param varIdentifier
 * @returns
 */
export function getExportVariableStatements(
  source: SourceFile,
  varIdentifier?: string | string[]
): MaybyArray<VariableStatement> | undefined {
  const topLevelVarStatements = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    .getChildrenOfKind(SyntaxKind.VariableStatement);

  const exportVarStatements = topLevelVarStatements.filter((v) =>
    v.isExported()
  );

  return varIdentifier
    ? Array.isArray(varIdentifier)
      ? exportVarStatements.filter((statement) =>
          varIdentifier.includes(getVariableIdentifier(statement))
        )
      : exportVarStatements.find(
          (statement) => getVariableIdentifier(statement) === varIdentifier
        )
    : exportVarStatements;
}

/**
 * Return all identifier of type alias exported
 * @param source
 * @returns
 */
export function getTypeExportIdentifiers(source: SourceFile) {
  const typeAliasDeclarationList = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    .getChildrenOfKind(SyntaxKind.TypeAliasDeclaration);

  return typeAliasDeclarationList.map((declaration) =>
    declaration.getFirstChildByKind(SyntaxKind.Identifier).getText()
  );
}

export function getTypeExportDeclaration(
  source: SourceFile
): TypeAliasDeclaration[];

export function getTypeExportDeclaration(
  source: SourceFile,
  identifier: string
): TypeAliasDeclaration;

export function getTypeExportDeclaration(
  source: SourceFile,
  identifiers: string[]
): TypeAliasDeclaration[];

export function getTypeExportDeclaration(
  source: SourceFile,
  identifier?: MaybyArray<string>
): MaybyArray<TypeAliasDeclaration> | undefined {
  const typeAliasDeclarationList = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    .getChildrenOfKind(SyntaxKind.TypeAliasDeclaration);

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

export function getInterfaceExportDeclaration(
  source: SourceFile
): InterfaceDeclaration[];

export function getInterfaceExportDeclaration(
  source: SourceFile,
  identifier: string
): InterfaceDeclaration;

export function getInterfaceExportDeclaration(
  source: SourceFile,
  identifiers: string[]
): InterfaceDeclaration[];

export function getInterfaceExportDeclaration(
  source: SourceFile,
  identifier?: MaybyArray<string>
): MaybyArray<InterfaceDeclaration> | undefined {
  const interfaceDeclarationList = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    .getChildrenOfKind(SyntaxKind.InterfaceDeclaration);

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
 * Return all identifier of interface exported
 * @param source
 * @returns
 */
export function getInterfaceExportIdentifiers(source: SourceFile) {
  const interfaceDeclarationList = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    .getChildrenOfKind(SyntaxKind.InterfaceDeclaration);

  return interfaceDeclarationList.map((declaration) =>
    declaration.getFirstChildByKind(SyntaxKind.Identifier).getText()
  );
}

/**
 * Return all export var statementss identifiers.
 * @param source
 * @returns string[]
 */
export function getExportVariableIdentifiers(source: SourceFile): string[] {
  return getExportVariableStatements(source).map((statement) =>
    getVariableIdentifier(statement)
  );
}

// export function getTypeExportIdentifiers(source: SourceFile): string[] {
//   return
// }
