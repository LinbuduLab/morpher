import {
  SourceFile,
  SyntaxKind,
  VariableDeclarationKind,
  VariableStatement,
} from "ts-morph";
import {
  getExportVariableStatements,
  getExportVariableIdentifiers,
  getVariableIdentifier,
  getTypeExportIdentifiers,
  getInterfaceExportIdentifiers,
} from "@ts-morpher/helper";

/**
 * Check dose Source File has `Export Variable Statement`
 * @param source
 * @example
 */
export function checkSourceFileHasExports(source: SourceFile): boolean {
  return Boolean(getExportVariableStatements(source).length);
}

/**
 * Check export statements exist by export identifier
 * @param source
 * @param identifier `foo` in `export const foo = 123`;
 * @returns
 */
export function checkExportExistByIdentifier(
  source: SourceFile,
  identifier: string
): boolean {
  return getExportVariableIdentifiers(source).includes(identifier);
}

/**
 * Check export type by identifier
 * @param source
 * @param identifier variable identifier
 * @returns
 */
export function checkExportDeclarationKindByIdentifier(
  source: SourceFile,
  identifier: string
): VariableDeclarationKind | undefined {
  const statement = getExportVariableStatements(source, identifier);

  const declareList = statement.getFirstChildByKind(
    SyntaxKind.VariableDeclarationList
  );

  return declareList.getDeclarationKind();
}

/**
 * Check export type by statement
 * @param source
 * @param statement variable statement
 * @returns
 */
export function checkExportDeclarationKindByStatement(
  statement: VariableStatement
): VariableDeclarationKind | undefined {
  const declareList = statement.getFirstChildByKind(
    SyntaxKind.VariableDeclarationList
  );

  return declareList.getDeclarationKind();
}

/**
 * Check type alias export exist
 * @param source
 * @param identifier
 * @returns
 */
export function checkTypeExportExistByIdentifier(
  source: SourceFile,
  identifier: string
) {
  return getTypeExportIdentifiers(source).includes(identifier);
}

/**
 * Check interface export exist
 * @param source
 * @param identifier
 * @returns
 */
export function checkInterfaceExportExistByIdentifier(
  source: SourceFile,
  identifier: string
) {
  return getInterfaceExportIdentifiers(source).includes(identifier);
}
