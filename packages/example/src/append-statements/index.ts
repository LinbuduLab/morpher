import { Project } from "ts-morph";
import path from "path";
import fs from "fs-extra";
import assert from "assert";
import {
  createImportDeclaration,
  appendStatementAfterImportDeclarations,
} from "@ts-morpher/creator";
import { ImportType } from "@ts-morpher/types";

const sourceFilePath = path.join(__dirname, "./source.ts");

fs.rmSync(sourceFilePath);
fs.ensureFileSync(sourceFilePath);

const p = new Project();
const source = p.addSourceFileAtPath(sourceFilePath);

createImportDeclaration(source, "fs", "fs-extra", ImportType.DEFAULT_IMPORT);

createImportDeclaration(source, "path", "path", ImportType.NAMESPACE_IMPORT);

appendStatementAfterImportDeclarations(source, "const songName = 'Sugar';");
appendStatementAfterImportDeclarations(source, "const singler = 'Maroon 5'");
