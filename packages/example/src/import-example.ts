import { Project } from "ts-morph";
import path from "path";
import fs from "fs-extra";
import assert from "assert";
import { createImportDeclaration } from "@ts-morpher/creator";
import { checkImportExistByModuleSpecifier } from "@ts-morpher/checker";
import { ImportType } from "@ts-morpher/types";

const sourceFilePath = path.join(__dirname, "./source.ts");

fs.rmSync(sourceFilePath);
fs.ensureFileSync(sourceFilePath);

const p = new Project();
const source = p.addSourceFileAtPath(sourceFilePath);

createImportDeclaration(
  source,
  ["ts", "transpileModule", "CompilerOptions"],
  "typescript",
  ImportType.DEFAULT_WITH_NAMED_IMPORT
);

createImportDeclaration(
  source,
  ["SourceFile", "VariableDeclarationKind"],
  "ts-morph",
  ImportType.NAMED_IMPORTS,
  true
);

assert(checkImportExistByModuleSpecifier(source, "typescript") === true);
assert(checkImportExistByModuleSpecifier(source, "ts-morph") === true);
