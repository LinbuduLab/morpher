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

createImportDeclaration(source, "fs", "fs-extra", ImportType.DEFAULT_IMPORT);

createImportDeclaration(source, "path", "path", ImportType.NAMESPACE_IMPORT);

createImportDeclaration(
  source,
  ["exec", "execSync", "spawn", "spawnSync"],
  "child_process",
  ImportType.NAMED_IMPORT
);

createImportDeclaration(
  source,
  // First item will be regarded as default import, and rest will be used as named imports.
  ["ts", "transpileModule", "CompilerOptions", "factory"],
  "typescript",
  ImportType.DEFAULT_WITH_NAMED_IMPORT
);

createImportDeclaration(
  source,
  ["SourceFile", "VariableDeclarationKind"],
  "ts-morph",
  ImportType.NAMED_IMPORT,
  true
);

assert(checkImportExistByModuleSpecifier(source, "fs-extra") === true);
assert(checkImportExistByModuleSpecifier(source, "path") === true);
assert(checkImportExistByModuleSpecifier(source, "child_process") === true);
assert(checkImportExistByModuleSpecifier(source, "typescript") === true);
assert(checkImportExistByModuleSpecifier(source, "ts-morph") === true);
