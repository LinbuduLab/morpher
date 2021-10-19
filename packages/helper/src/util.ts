import {
  ClassDeclaration,
  Decorator,
  ImportDeclaration,
  InterfaceDeclaration,
  MethodDeclaration,
  PropertyDeclaration,
  SyntaxKind,
  TypeAliasDeclaration,
  VariableStatement,
} from "ts-morph";

/**
 * @private
 */
export type MaybeArray<T> = T | T[];

/**
 * @private
 */
export function uniqArray<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * @private
 */
export function ensureArray<T>(maybeArray: MaybeArray<T>): T[] {
  return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
}

/**
 * @private
 */
export function getDeclarationIdentifierByKind(
  dec:
    | ClassDeclaration
    | MethodDeclaration
    | PropertyDeclaration
    | ImportDeclaration
    | Decorator
): string {
  switch (dec.getKind()) {
    case SyntaxKind.ClassDeclaration:
    case SyntaxKind.MethodDeclaration:
    case SyntaxKind.PropertyDeclaration:
    case SyntaxKind.Decorator:
      return (dec as ClassDeclaration).getName();

    case SyntaxKind.ImportDeclaration:
      return dec.asKind(SyntaxKind.ImportDeclaration).getModuleSpecifierValue();
  }
}

/**
 * @private
 */
export function getVariableIdentifier(statement: VariableStatement): string {
  return statement
    .getFirstChildByKind(SyntaxKind.VariableDeclarationList)
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    .getFirstChildByKind(SyntaxKind.VariableDeclaration)
    .getFirstChildByKind(SyntaxKind.Identifier)
    .getText();
}

/**
 * @private
 */
export function getTypeOrInterfaceIdentifier(
  declaration: TypeAliasDeclaration | InterfaceDeclaration
): string {
  return declaration.getName();
}
