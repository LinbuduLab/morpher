import { SourceFile } from "ts-morph";
import {
  getDeclarationIdentifier,
  getImportDeclarations,
} from "@ts-morpher/helper";
import {
  checkImportExistBySpecifier,
  hasImports,
  checkIsDefaultImportDeclaration,
  checkIsNamespaceImportDeclaration,
  checkIsNamedImportDeclaration,
  checkImportTypeBySpecifier,
} from "@ts-morpher/checker";
import { ImportType } from "@ts-morpher/types";

/**
 * Remove imports by `Module Specifier`
 * @param source
 * @param specifiers specifiers of imports to remove
 * @param apply save source file
 */
export function removeImportDeclaration(
  source: SourceFile,
  specifiers: string[],
  apply = true
) {
  const validImportSpecToRemove = specifiers.filter((spec) =>
    checkImportExistBySpecifier(source, spec)
  );

  validImportSpecToRemove.forEach((spec) => {
    const targetImport = getImportDeclarations(source, spec);
    targetImport?.remove();
  });

  apply && source.saveSync();
}

/**
 * Remove imports by `Import Type`
 * @param source
 * @param removeTypes types of imports to remove: "namespace" | "default" | "named"
 * @param apply save source file
 * @returns
 */
export function removeImportDeclarationByTypes(
  source: SourceFile,
  removeTypes?: Partial<Record<"namespace" | "default" | "named", boolean>>,
  apply = true
) {
  if (!hasImports(source)) {
    return;
  }

  const sourceImports = getImportDeclarations(source);

  sourceImports.forEach((imp) => {
    switch (checkImportTypeBySpecifier(source, getDeclarationIdentifier(imp))) {
      case ImportType.DEFAULT_IMPORT:
        removeTypes?.default && imp.remove();
        break;

      case ImportType.NAMED_IMPORTS:
        removeTypes?.named && imp.remove();
        break;

      case ImportType.NAMESPACE_IMPORT:
        removeTypes?.namespace && imp.remove();
        break;

      default:
        break;
    }
  });

  apply && source.saveSync();
}
