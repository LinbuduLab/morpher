import { SourceFile } from "ts-morph";
import {
  getImportDeclaration,
  getImportDeclarationModuleSpecifier,
} from "./get-import-declaration";
import { importDeclarationExist } from "./has-import-declaration";

export function updateDefaultImportClause(
  source: SourceFile,
  specifier: string,
  updatedClause: string,
  apply = true
) {
  if (!importDeclarationExist(source, specifier)) {
    return;
  }
  const targetImport = getImportDeclaration(source, specifier);

  if (!targetImport?.getDefaultImport()) {
    return;
  }

  targetImport.setDefaultImport(updatedClause);

  apply && source.saveSync();
}

export function updateNamespaceImportClause(
  source: SourceFile,
  specifier: string,
  updatedNamespace: string,
  apply = true
) {
  if (!importDeclarationExist(source, specifier)) {
    return;
  }

  const targetImport = getImportDeclaration(source, specifier);

  if (!targetImport?.getNamespaceImport()) {
    return;
  }

  targetImport.setNamespaceImport(updatedNamespace);

  apply && source.saveSync();
}
