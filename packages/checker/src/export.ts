import { SourceFile, SyntaxKind, VariableStatement } from "ts-morph";
import {
  getExportVariableStatements,
  getExportVariableIdentifiers,
  getVariableIdentifier,
} from "@ts-morpher/helper";
import { ExportType } from "@ts-morpher/types";

/**
 * Check export statements exist by export identifier
 * @param source
 * @param identifier `foo` in `export const foo = 123`;
 * @returns
 */
export function checkExportExistByIdentifier(
  source: SourceFile,
  identifier: string
): boolean {
  return getExportVariableIdentifiers(source).includes(identifier);
}

/**
 * Check export type by identifier
 * @param source
 * @param identifier variable statement
 * @returns
 */
export function checkExportTypeByIdentifier(
  source: SourceFile,
  identifier: string
): ExportType | undefined {
  if (!checkExportExistByIdentifier(source, identifier)) {
    return undefined;
  }

  const statement = getExportVariableStatements(source, identifier);

  const declareList = statement.getFirstChildByKind(
    SyntaxKind.VariableDeclarationList
  );

  return declareList.getFirstChildIfKind(SyntaxKind.LetKeyword)
    ? ExportType.LET
    : declareList.getFirstChildIfKind(SyntaxKind.ConstKeyword)
    ? ExportType.CONST
    : declareList.getFirstChildIfKind(SyntaxKind.VarKeyword)
    ? ExportType.VAR
    : undefined;
}

/**
 * Check export type by statement
 * @param source
 * @param statement variable statement
 * @returns
 */
export function checkExportTypeByStatement(
  source: SourceFile,
  statement: VariableStatement
): ExportType | undefined {
  if (!checkExportExistByIdentifier(source, getVariableIdentifier(statement))) {
    return undefined;
  }

  const declareList = statement.getFirstChildByKind(
    SyntaxKind.VariableDeclarationList
  );

  console.log(
    "declareList: ",
    declareList.getChildren().map((x) => x.getKindName())
  );

  return declareList.getFirstChildIfKind(SyntaxKind.LetKeyword)
    ? ExportType.LET
    : declareList.getFirstChildIfKind(SyntaxKind.ConstKeyword)
    ? ExportType.CONST
    : declareList.getFirstChildIfKind(SyntaxKind.VarKeyword)
    ? ExportType.VAR
    : undefined;
}
