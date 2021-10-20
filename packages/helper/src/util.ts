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
 * @internal
 */
export type MaybeArray<T> = T | T[];

/**
 * @internal
 */
export function uniqArray<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * @internal
 */
export function ensureArray<T>(maybeArray: MaybeArray<T>): T[] {
  return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
}

/**
 * @internal
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
 * @internal
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
 * @internal
 */
export function getTypeOrInterfaceIdentifier(
  declaration: TypeAliasDeclaration | InterfaceDeclaration
): string {
  return declaration.getName();
}
