import {
  SourceFile,
  SyntaxKind,
  VariableDeclarationKind,
  VariableStatement,
} from "ts-morph";
import {
  getExportVariableStatements,
  getExportVariableIdentifiers,
  getTypeExportIdentifiers,
  getInterfaceExportIdentifiers,
} from "@ts-morpher/helper";

/**
 * Check dose source file has `Export Variable Statement`(`export const foo = 'foo';`) defined.
 * @param source SourceFile
 * @example
 */
export function checkSourceFileHasExports(source: SourceFile): boolean {
  return Boolean(getExportVariableStatements(source).length);
}

/**
 * Check dose Source File has `Type Alias Export`(`export type A = string;`) or `Interface Export`(`export interface IFoo {}`) defined.
 * @param source SourceFile
 * @example
 */
export function checkSourceFileHasTypeExports(source: SourceFile): boolean {
  return (
    Boolean(getTypeExportIdentifiers(source).length) ||
    Boolean(getInterfaceExportIdentifiers(source).length)
  );
}

/**
 * Check does export statements exist by export identifier.
 * @param source SourceFile
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
 * Check export declare kind(var, let, const) by identifier.
 * @param source SourceFile
 * @param identifier `foo` in `export const foo = 123`;
 * @returns
 */
export function checkExportDeclarationKindByIdentifier(
  source: SourceFile,
  identifier: string
): VariableDeclarationKind | undefined {
  const statement = getExportVariableStatements(source, identifier);

  if (!statement) return;

  const declareList = statement.getFirstChildByKind(
    SyntaxKind.VariableDeclarationList
  );

  return declareList.getDeclarationKind();
}

/**
 * Check export declare kind(var, let, const) by statement.
 * @param source SourceFile
 * @param statement variable statement, use {@link getExportVariableStatements} to get statement definition
 * @returns
 */
export function checkExportDeclarationKindByStatement(
  statement: VariableStatement
): VariableDeclarationKind {
  const declareList = statement.getFirstChildByKind(
    SyntaxKind.VariableDeclarationList
  );

  return declareList.getDeclarationKind();
}

/**
 * Check does type alias export exist by identifier.
 * @param source SourceFile
 * @param identifier 'Foo' in `export type Foo = string;`
 * @returns
 */
export function checkTypeExportExistByIdentifier(
  source: SourceFile,
  identifier: string
) {
  return getTypeExportIdentifiers(source).includes(identifier);
}

/**
 * Check does interface export exist by identifier.
 * @param source SourceFile
 * @param identifier 'Foo' in `export interface Foo {};`
 * @returns
 */
export function checkInterfaceExportExistByIdentifier(
  source: SourceFile,
  identifier: string
) {
  return getInterfaceExportIdentifiers(source).includes(identifier);
}
