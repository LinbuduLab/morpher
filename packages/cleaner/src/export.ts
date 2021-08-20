import { SourceFile } from "ts-morph";
import {
  getExportVariableIdentifiers,
  getExportVariableStatements,
} from "@ts-morpher/helper";

export function removeConstExport(
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
