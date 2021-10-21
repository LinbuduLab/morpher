import { Project } from "ts-morph";
import path from "path";
import assert from "assert";
import {
  checkImportExistByModuleSpecifier,
  checkImportType,
  checkSourceFileHasImports,
} from "@ts-morpher/checker";
import { getImportDeclarations } from "@ts-morpher/helper";
import { ImportType } from "@ts-morpher/types";

const sourceWithImportFilePath = path.join(
  __dirname,
  "./source-with-import.ts"
);

const sourceWithoutImportFilePath = path.join(
  __dirname,
  "./source-without-import.ts"
);

const p = new Project();
const source1 = p.addSourceFileAtPath(sourceWithImportFilePath);
const source2 = p.addSourceFileAtPath(sourceWithoutImportFilePath);

const i = getImportDeclarations(source1, "typescript");
const type = checkImportType(i);

assert(checkSourceFileHasImports(source1) === true);
assert(checkSourceFileHasImports(source2) === false);
assert(type === ImportType.DIRECTLY_IMPORT);
assert(checkImportExistByModuleSpecifier(source1, "typescript") === true);
