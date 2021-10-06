import { SourceFile } from "ts-morph";
import {
  getExportVariableIdentifiers,
  getExportVariableStatements,
} from "@ts-morpher/helper";

/**
 * Remove export statements from source file, specifier identifier to remove specified one.
 * @param source
 * @param identifier 'foo' in export const foo = 1;
 * @param apply save source file
 * @returns
 */
export function removeExportStatements(
  source: SourceFile,
  identifier?: string,
  apply = true
) {
  const exportVars = getExportVariableIdentifiers(source);

  if (identifier && !exportVars.includes(identifier)) {
    return;
  }

  identifier
    ? getExportVariableStatements(source, identifier).remove()
    : exportVars.forEach((exp) =>
        getExportVariableStatements(source, exp).remove()
      );

  apply && source.saveSync();
}
