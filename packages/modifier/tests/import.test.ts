import { Project, Scope, SourceFile } from "ts-morph";
import path from "path";
import fs from "fs-extra";
import {
  checkImportExistByModuleSpecifier,
  checkImportTypeByModuleSpecifier,
  checkSourceFileHasImports,
} from "@ts-morpher/checker";
import {
  getImportDeclarations,
  getTypeOnlyImportDeclarations,
} from "@ts-morpher/helper";
import { ImportType } from "@ts-morpher/types";
import {
  addNamedImportMembers,
  removeNamedImportMembers,
  updateImportSpecifier,
  updateDefaultImportClause,
  updateNamespaceImportClause,
} from "../src/import";

const p = new Project();

let source: SourceFile;

let source2: SourceFile;

const savedContent = fs.readFileSync(
  path.resolve(__dirname, "./fixtures/import.fixture.ts")
);

const savedContent2 = fs.readFileSync(
  path.resolve(__dirname, "./fixtures/empty.fixture.ts")
);

beforeEach(() => {
  source && p.removeSourceFile(source);
  source && p.removeSourceFile(source2);

  source = p.addSourceFileAtPath(
    path.resolve(__dirname, "./fixtures/import.fixture.ts")
  );

  source2 = p.addSourceFileAtPath(
    path.resolve(__dirname, "./fixtures/empty.fixture.ts")
  );
});

afterEach(() => {
  fs.writeFileSync(
    path.resolve(__dirname, "./fixtures/import.fixture.ts"),
    savedContent
  );

  fs.writeFileSync(
    path.resolve(__dirname, "./fixtures/empty.fixture.ts"),
    savedContent2
  );
});

describe("package/modifier-import", () => {
  it("should add named import member", () => {
    expect(
      checkImportExistByModuleSpecifier(source, "typescript")
    ).toBeTruthy();

    addNamedImportMembers(source, "typescript", [
      "transpileModule",
      "CompilerOptions",
    ]);

    expect(
      checkImportExistByModuleSpecifier(source, "typescript")
    ).toBeTruthy();
    expect(
      getImportDeclarations(source, "typescript")!
        .getNamedImports()
        .map((x) => x.getText())
        .sort()
    ).toEqual(["transpileModule", "CompilerOptions"].sort());
  });
  it("should create named import when inexist", () => {
    expect(checkImportExistByModuleSpecifier(source, "chalk")).toBeFalsy();

    addNamedImportMembers(source, "chalk", ["green", "cyan"], true);

    expect(checkImportExistByModuleSpecifier(source, "chalk")).toBeTruthy();
    expect(
      getImportDeclarations(source, "chalk")!
        .getNamedImports()
        .map((x) => x.getText())
        .sort()
    ).toEqual(["green", "cyan"].sort());
  });
  it("should remove named import member", () => {
    expect(
      checkImportExistByModuleSpecifier(source, "child_process")
    ).toBeTruthy();

    removeNamedImportMembers(source, "child_process", ["spawn", "execFile"]);
    expect(
      checkImportExistByModuleSpecifier(source, "child_process")
    ).toBeTruthy();
    expect(
      getImportDeclarations(source, "child_process")!
        .getNamedImports()
        .map((x) => x.getText())
        .sort()
    ).toEqual(["spawnSync", "execFileSync"].sort());
  });
  it("should update module specifier", () => {
    expect(
      checkImportExistByModuleSpecifier(source, "child_process")
    ).toBeTruthy();
    updateImportSpecifier(source, "child_process", "updated_child_process");
    expect(
      checkImportExistByModuleSpecifier(source, "child_process")
    ).toBeFalsy();
    expect(
      checkImportExistByModuleSpecifier(source, "updated_child_process")
    ).toBeTruthy();
  });
  it("should update default import clause", () => {
    expect(checkImportExistByModuleSpecifier(source, "fs")).toBeTruthy();

    updateDefaultImportClause(source, "fs", "fsDefault");

    expect(checkImportExistByModuleSpecifier(source, "fs")).toBeTruthy();
    expect(
      getImportDeclarations(source, "fs")!.getDefaultImport()!.getText()
    ).toBe("fsDefault");
  });
  it("should update namespace import clause", () => {
    expect(checkImportExistByModuleSpecifier(source, "path")).toBeTruthy();

    updateNamespaceImportClause(source, "path", "pathDefault");

    expect(checkImportExistByModuleSpecifier(source, "path")).toBeTruthy();
    expect(
      getImportDeclarations(source, "path")!.getNamespaceImport()!.getText()
    ).toBe("pathDefault");
  });

  it("should skip when target does exist", () => {
    addNamedImportMembers(source, "typescript", ["transpileModule"], false);

    expect(
      fs.readFileSync(path.resolve(__dirname, "./fixtures/import.fixture.ts"))
    ).toEqual(savedContent);
  });

  it("should skip when target does not exist", () => {
    addNamedImportMembers(source, "inexist", []);
    removeNamedImportMembers(source, "inexist", []);
    removeNamedImportMembers(source, "typescript", ["CompilerOptions"]);
    updateImportSpecifier(source, "inexist", "inexistAgain");
    updateDefaultImportClause(source, "inexist", "inexist");
    updateDefaultImportClause(source, "path", "path2");
    updateNamespaceImportClause(source, "inexist", "inexist");
    updateNamespaceImportClause(source, "fs", "fs2");

    expect(
      fs.readFileSync(path.resolve(__dirname, "./fixtures/import.fixture.ts"))
    ).toEqual(savedContent);
  });
});
