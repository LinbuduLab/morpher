import { SourceFile } from "ts-morph";
import { getImportDec } from "@ts-morpher/helper";
import {
  checkImportExistByModSpec,
  hasImportDec,
  checkIsDefaultImportByDec,
  checkIsNamespaceImportByDec,
  checkIsNamedImportByDec,
} from "@ts-morpher/checker";

export function removeImportDeclaration(
  source: SourceFile,
  specifiers: string[],
  apply = true
) {
  const validSpecToRemove = specifiers.filter((spec) =>
    checkImportExistByModSpec(source, spec)
  );

  validSpecToRemove.forEach((spec) => {
    const targetImport = getImportDec(source, spec)!;

    targetImport.remove();
  });

  apply && source.saveSync();
}

export function removeImportDeclarationByTypes(
  source: SourceFile,
  removeByTypes?: Partial<Record<"namespace" | "default" | "named", boolean>>,
  apply = true
) {
  if (!hasImportDec(source)) {
    return;
  }
  const sourceImports = getImportDec(source);

  sourceImports.forEach((imp) => {
    if (removeByTypes?.default && checkIsDefaultImportByDec(imp)) {
      imp.remove();
      return;
    }

    if (removeByTypes?.named && checkIsNamedImportByDec(imp)) {
      imp.remove();
      return;
    }

    if (removeByTypes?.namespace && checkIsNamespaceImportByDec(imp)) {
      imp.remove();
      return;
    }
  });

  apply && source.saveSync();
}
