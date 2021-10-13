import { SourceFile } from "ts-morph";
import {
  getDeclarationIdentifier,
  getImportDeclarations,
} from "@ts-morpher/helper";
import {
  checkImportExistByModuleSpecifier,
  checkSourceFileHasImports,
  checkImportTypeByModuleSpecifier,
} from "@ts-morpher/checker";
import { ImportType } from "@ts-morpher/types";

/**
 * Remove all imports
 * @param source
 * @param apply save source file
 */
export function removeAllImports(source: SourceFile, apply = true) {
  getImportDeclarations(source).forEach((i) => i.remove());
  apply && source.saveSync();
}

/**
 * Remove all type-only imports
 * @param source
 * @param apply save source file
 */
export function removeAllTypeOnlyImports(source: SourceFile, apply = true) {
  getImportDeclarations(source).forEach((i) => i.isTypeOnly() && i.remove());
  apply && source.saveSync();
}

/**
 * Remove imports by `Module Specifier`
 * @param source
 * @param specifiers specifiers of imports to remove
 * @param apply save source file
 */
export function removeImportDeclarationByModuleSpecifier(
  source: SourceFile,
  specifiers: string[],
  apply = true
) {
  const validImportSpecToRemove = specifiers.filter((spec) =>
    checkImportExistByModuleSpecifier(source, spec)
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
export function removeImportDeclarationByType(
  source: SourceFile,
  removeTypes?: Partial<Record<"namespace" | "default" | "named", boolean>>,
  apply = true
) {
  if (!checkSourceFileHasImports(source)) {
    return;
  }

  const sourceImports = getImportDeclarations(source);

  sourceImports.forEach((imp) => {
    switch (
      checkImportTypeByModuleSpecifier(source, getDeclarationIdentifier(imp))
    ) {
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
