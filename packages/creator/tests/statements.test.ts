import { Project, Scope, SourceFile, VariableDeclarationKind } from "ts-morph";
import tmp from "tmp";
import { createImportDeclaration } from "../src/import";
import { createBaseVariableExport } from "../src/export";
import { ImportType } from "@ts-morpher/types";
import { appendStatementAfterImportDeclarations } from "../src/statements";

let source: SourceFile;

beforeEach(() => {
  source = new Project().addSourceFileAtPath(tmp.fileSync().name);
});

// TODO: check by ChildIndex

describe("package/creator-statements", () => {
  it("should append before statements", () => {
    createBaseVariableExport(
      source,
      "foo",
      "'foo'",
      VariableDeclarationKind.Const
    );

    appendStatementAfterImportDeclarations(source, ['const foo = "foo";']);

    expect(source.getText()).toContain(`const foo = "foo";`);
  });
  it("should append after imports", () => {
    createImportDeclaration(
      source,
      ["transpileModule"],
      "typescript",
      ImportType.NAMED_IMPORT
    );

    appendStatementAfterImportDeclarations(source, ['const foo = "foo";']);

    expect(source.getText()).toContain(
      `import { transpileModule } from "typescript";`
    );
    expect(source.getText()).toContain(`const foo = "foo";`);
  });

  it("should append top if no imports found", () => {
    appendStatementAfterImportDeclarations(source, ['const foo = "foo";']);

    expect(source.getText()).toContain(`const foo = "foo";`);
  });
});
