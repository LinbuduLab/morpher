import { SourceFile } from "ts-morph";
import { getImportDeclaration } from "./import-get";
import {
  importDeclarationExist,
  hasImportDeclaration,
  checkIsDefaultImportByDeclaration,
  checkIsNamespaceImportByDeclaration,
  checkIsNamedImportByDeclaration,
} from "./import-check";

export function removeImportDeclaration(
  source: SourceFile,
  specifiers: string[],
  apply = true
) {
  const validSpecToRemove = specifiers.filter((spec) =>
    importDeclarationExist(source, spec)
  );

  validSpecToRemove.forEach((spec) => {
    const targetImport = getImportDeclaration(source, spec)!;

    targetImport.remove();
  });

  apply && source.saveSync();
}

export function removeImportDeclarationByTypes(
  source: SourceFile,
  removeByTypes?: Partial<Record<"namespace" | "default" | "named", boolean>>,
  apply = true
) {
  if (!hasImportDeclaration(source)) {
    return;
  }
  const sourceImports = getImportDeclaration(source);

  sourceImports.forEach((imp) => {
    if (removeByTypes?.default && checkIsDefaultImportByDeclaration(imp)) {
      imp.remove();
      return;
    }

    if (removeByTypes?.named && checkIsNamedImportByDeclaration(imp)) {
      imp.remove();
      return;
    }

    if (removeByTypes?.namespace && checkIsNamespaceImportByDeclaration(imp)) {
      imp.remove();
      return;
    }
  });

  apply && source.saveSync();
}
