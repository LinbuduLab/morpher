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

export type MaybyArray<T> = T | T[];

export function ensureArray<T>(maybeArray: MaybyArray<T>): T[] {
  return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
}

export function getDeclarationIdentifier(
  dec:
    | ClassDeclaration
    | MethodDeclaration
    | PropertyDeclaration
    | ImportDeclaration
    | Decorator
) {
  return dec.getFirstChildByKind(SyntaxKind.Identifier).getText();
}

export function getVariableIdentifier(statement: VariableStatement): string {
  return statement
    .getFirstChildByKind(SyntaxKind.VariableDeclarationList)
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    .getFirstChildByKind(SyntaxKind.VariableDeclaration)
    .getFirstChildByKind(SyntaxKind.Identifier)
    .getText();
}

export function getTypeOrInterfaceIdentifier(
  declaration: TypeAliasDeclaration | InterfaceDeclaration
): string {
  return declaration.getFirstChildByKind(SyntaxKind.Identifier).getText();
}
