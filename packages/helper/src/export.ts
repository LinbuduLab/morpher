import { SourceFile, SyntaxKind, VariableStatement } from "ts-morph";
import { getVariableIdentifier, MaybyArray } from "./util";

/**
 * Return all export statements, specify `varIdentifier` to return only matched
 * @param source
 * @param varIdentifier
 * @returns
 */
export function getExportVariableStatements(
  source: SourceFile
): VariableStatement[];

/**
 * Return all export statements, specify `varIdentifier` to return only matched
 * @param source
 * @param varIdentifier
 * @returns
 */
export function getExportVariableStatements(
  source: SourceFile,
  varIdentifier: string
): VariableStatement;

/**
 * Return all export statements, specify `varIdentifier` to return only matched
 * @param source
 * @param varIdentifier
 * @returns
 */
export function getExportVariableStatements(
  source: SourceFile,
  varIdentifier: string[]
): VariableStatement;

/**
 * Return all export statements, specify `varIdentifier` to return only matched
 * @param source
 * @param varIdentifier
 * @returns
 */
export function getExportVariableStatements(
  source: SourceFile,
  varIdentifier?: string | string[]
): MaybyArray<VariableStatement> | undefined {
  const topLevelVarStatements = source

    .getFirstChildByKind(SyntaxKind.SyntaxList)
    .getChildrenOfKind(SyntaxKind.VariableStatement);

  const exportVarStatements = topLevelVarStatements.filter((v) => {
    const syntaxBeforeVarIdentifier = v.getFirstChildIfKind(
      SyntaxKind.SyntaxList
    );

    return syntaxBeforeVarIdentifier?.getText() === "export";
  });

  return varIdentifier
    ? Array.isArray(varIdentifier)
      ? exportVarStatements.filter((statement) =>
          varIdentifier.includes(getVariableIdentifier(statement))
        )
      : exportVarStatements.find(
          (statement) => getVariableIdentifier(statement) === varIdentifier
        )
    : exportVarStatements;
}

/**
 * Return all export var statementss identifiers.
 * @param source
 * @returns string[]
 */
export function getExportVariableIdentifiers(source: SourceFile): string[] {
  return getExportVariableStatements(source).map((statement) =>
    getVariableIdentifier(statement)
  );
}
