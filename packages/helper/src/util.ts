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

export const STATIC_KEYWORD = "static";
export const PUBLIC_KEYWORD = "public";
export const PRIVATE_KEYWORD = "private";
export const PROTECTED_KEYWORD = "protected";
export const READONLY_KEYWORD = "readonly";
export const ASYNC_KEYWORD = "async";

export function uniqArray<T>(array: T[]): T[] {
  return [...new Set(array)];
}

export function ensureArray<T>(maybeArray: MaybyArray<T>): T[] {
  return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
}

export function getDeclarationIdentifierByKind(
  dec:
    | ClassDeclaration
    | MethodDeclaration
    | PropertyDeclaration
    | ImportDeclaration
    | Decorator
) {
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
  return declaration.getName();
}
