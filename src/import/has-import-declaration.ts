import { ImportDeclaration, SourceFile, SyntaxKind } from "ts-morph";
import {
  getImportDeclaration,
  getImportDeclarationModuleSpecifier,
} from "./get-import-declaration";

export function importDeclarationExist(
  source: SourceFile,
  moduleSpecifier: string
): boolean {
  return getImportDeclarationModuleSpecifier(source).includes(moduleSpecifier);
}

export function hasImportDeclaration(source: SourceFile): boolean {
  return Boolean(getImportDeclaration(source).length);
}
