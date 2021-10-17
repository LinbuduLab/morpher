import { SourceFile, VariableDeclarationKind } from "ts-morph";
import {
  getExportVariableIdentifiers,
  getExportVariableStatements,
  getTypeExportDeclaration,
  getInterfaceExportDeclaration,
  MaybyArray,
} from "@ts-morpher/helper";
import {
  checkSourceFileHasExports,
  checkExportDeclarationKindByStatement,
} from "@ts-morpher/checker";

/**
 * Remove export statements from source file, specifier identifier to remove specified one.
 * @param source
 * @param identifier 'foo' in export const foo = 1;
 * @param apply save source file
 * @returns
 */
export function removeExportStatementsByIdentifier(
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

/**
 * Remove export by `Export Type`
 * @param source
 * @param removeTypes types of exports to remove: "const" | "let" | "var"
 * @param apply save source file
 * @returns
 */
export function removeExportStatementsByExportType(
  source: SourceFile,
  removeTypes?: Partial<Record<"var" | "let" | "const", boolean>>,
  apply = true
) {
  if (!checkSourceFileHasExports(source)) {
    return;
  }

  const sourceExportStatements = getExportVariableStatements(source);

  sourceExportStatements.forEach((statement) => {
    switch (checkExportDeclarationKindByStatement(statement)) {
      case VariableDeclarationKind.Let:
        removeTypes.let && statement.remove();
        break;

      case VariableDeclarationKind.Const:
        removeTypes.const && statement.remove();
        break;

      case VariableDeclarationKind.Var:
        removeTypes.var && statement.remove();
        break;
    }
  });

  apply && source.saveSync();
}

/**
 * Remove all type alias export statements, specify identifier to remove only matched
 * @param source
 * @param identifier type alias
 * @param apply
 */
export function removeTypeExportByIdentifier(
  source: SourceFile,
  identifier: null,
  apply?: boolean
): void;

/**
 * Remove all type alias export statements, specify identifier to remove only matched
 * @param source
 * @param identifier type alias
 * @param apply
 */
export function removeTypeExportByIdentifier(
  source: SourceFile,
  identifier: MaybyArray<string>,
  apply?: boolean
): void;

/**
 * Remove all type alias export statements, specify identifier to remove only matched
 * @param source
 * @param identifier type alias
 * @param apply
 */
export function removeTypeExportByIdentifier(
  source: SourceFile,
  identifier?: MaybyArray<string>,
  apply = true
): void {
  if (!identifier) {
    const exps = getTypeExportDeclaration(source);
    exps.forEach((exp) => exp.remove());
    apply && source.saveSync();
    return;
  }

  Array.isArray(identifier)
    ? getTypeExportDeclaration(source, identifier).forEach((exp) =>
        exp.remove()
      )
    : getTypeExportDeclaration(source, identifier)?.remove();

  apply && source.saveSync();
}

/**
 * Remove all interface export statements, specify identifier to remove only matched
 * @param source
 * @param identifier interface identifier
 * @param apply
 */
export function removeInterfaceExportByIdentifier(
  source: SourceFile,
  identifier: null,
  apply?: boolean
): void;

/**
 * Remove all interface export statements, specify identifier to remove only matched
 * @param source
 * @param identifier interface identifier
 * @param apply
 */
export function removeInterfaceExportByIdentifier(
  source: SourceFile,
  identifier: string,
  apply?: boolean
): void;

/**
 * Remove all interface export statements, specify identifier to remove only matched
 * @param source
 * @param identifier interface identifier
 * @param apply
 */
export function removeInterfaceExportByIdentifier(
  source: SourceFile,
  identifier: string[],
  apply?: boolean
): void;

/**
 * Remove all interface export statements, specify identifier to remove only matched
 * @param source
 * @param identifier interface identifier
 * @param apply
 */
export function removeInterfaceExportByIdentifier(
  source: SourceFile,
  identifier?: MaybyArray<string>,
  apply = true
): void {
  if (!identifier) {
    const exps = getInterfaceExportDeclaration(source);
    exps.forEach((exp) => exp.remove());
    apply && source.saveSync();
    return;
  }

  Array.isArray(identifier)
    ? getInterfaceExportDeclaration(source, identifier).forEach((exp) =>
        exp.remove()
      )
    : getInterfaceExportDeclaration(source, identifier)?.remove();

  apply && source.saveSync();
}
