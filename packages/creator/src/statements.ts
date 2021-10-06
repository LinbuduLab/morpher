import { SourceFile, SyntaxKind } from "ts-morph";
import { ensureArray, MaybyArray } from "@ts-morpher/helper";

/**
 * Append statements after import declarations with new line,
 * will append in top of file if no import declaration found.
 * @param source
 * @param appendStatement plain statements to insert
 * @param apply save source file
 */
export function appendStatementAfterImportDeclarations(
  source: SourceFile,
  appendStatement: MaybyArray<string>,
  apply = true
) {
  const importDeclarationList = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    ?.getChildrenOfKind(SyntaxKind.ImportDeclaration);

  const appendIdx = importDeclarationList?.length
    ? source.getLastChildByKind(SyntaxKind.ImportDeclaration)!.getChildIndex() +
      1
    : 0;

  ensureArray(appendStatement).forEach((statement, idx) => {
    source.insertStatements(appendIdx, (writer) => {
      idx === 0 && writer.newLine();
      writer.write(statement);
    });
  });

  apply && source.saveSync();
}
