import path from "path";
import { Project, SyntaxKind } from "ts-morph";
import { checkExportTypeByStatement } from "./export";

const source = new Project().addSourceFileAtPath(
  path.resolve(__dirname, "./fixturers.ts")
);

// const statement = source
//   .getFirstChildByKind(SyntaxKind.SyntaxList)
//   .getFirstChildByKind(SyntaxKind.VariableStatement);

const statement = source.getFirstChildByKind(SyntaxKind.SyntaxList);

console.log(
  "statement: ",
  statement
    // .getFirstChildByKind(SyntaxKind.InterfaceDeclaration)
    .getChildren()
    .map((x) => x.getKindName())
);

// console.log(checkExportTypeByStatement(source, statement));
