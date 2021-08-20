import {
  SourceFile,
  SyntaxKind,
  VariableDeclarationKind,
  VariableStatement,
  ts,
  TypeNode,
} from "ts-morph";

export function getExportVariableStatements(
  source: SourceFile,
  varIdentifier: string
): VariableStatement;

export function getExportVariableStatements(
  source: SourceFile
): VariableStatement[];

// 获取所有的导出语句（可根据export的identifier查找）
export function getExportVariableStatements(
  source: SourceFile,
  varIdentifier?: string
): VariableStatement | VariableStatement[] {
  const topLevelVarStatements = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    .getChildrenOfKind(SyntaxKind.VariableStatement);

  const exportVarStatements = topLevelVarStatements.filter((v) => {
    const syntaxBeforeVarIdentifier = v.getFirstChildIfKind(
      SyntaxKind.SyntaxList
    );

    return (
      syntaxBeforeVarIdentifier &&
      syntaxBeforeVarIdentifier.getText() &&
      syntaxBeforeVarIdentifier.getText() === "export"
    );
  });

  if (varIdentifier) {
    return exportVarStatements.find((statement) => {
      return (
        statement
          .getFirstChildByKind(SyntaxKind.VariableDeclarationList)
          .getFirstChildByKind(SyntaxKind.SyntaxList)
          .getFirstChildByKind(SyntaxKind.VariableDeclaration)
          .getFirstChildByKind(SyntaxKind.Identifier)
          .getText() === varIdentifier
      );
    });
  }

  return exportVarStatements;
}

// 获取所有的导出语句的变量值
export function getExportVariableIdentifiers(source: SourceFile): string[] {
  const exportVarStatements = getExportVariableStatements(source);
  const exportVars = exportVarStatements.map((v) =>
    v
      .getFirstChildByKind(SyntaxKind.VariableDeclarationList)
      .getFirstChildByKind(SyntaxKind.SyntaxList)
      .getFirstChildByKind(SyntaxKind.VariableDeclaration)
      // [ 'Identifier', 'EqualsToken', 'ObjectLiteralExpression' ]
      .getFirstChildByKind(SyntaxKind.Identifier)
      .getText()
  );

  return exportVars;
}
