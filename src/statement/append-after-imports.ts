import { SourceFile, SyntaxKind } from "ts-morph";
import { ensureArray } from "../utils/helper";

export function appendStatementAfterImports(
  source: SourceFile,
  appendStatement: string | string[],
  apply = true
) {
  const imports = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    ?.getChildrenOfKind(SyntaxKind.ImportDeclaration);

  let appendIdx: number;

  if (!imports?.length) {
    appendIdx = 0;
  } else {
    appendIdx =
      source.getLastChildByKind(SyntaxKind.ImportDeclaration)!.getChildIndex() +
      1;
  }

  ensureArray(appendStatement).forEach((statement, idx) => {
    source.insertStatements(appendIdx, (writer) => {
      idx === 0 && writer.newLine();
      writer.write(statement);
    });
  });

  apply && source.saveSync();
}
