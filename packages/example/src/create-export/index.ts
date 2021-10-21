import { Project } from "ts-morph";
import path from "path";
import fs from "fs-extra";
import assert from "assert";
import {
  createBaseInterfaceExport,
  createBaseTypeExport,
  createImportDeclaration,
} from "@ts-morpher/creator";
import { ImportType } from "@ts-morpher/types";

const sourceFilePath = path.join(__dirname, "./source.ts");

fs.rmSync(sourceFilePath);
fs.ensureFileSync(sourceFilePath);

const p = new Project();
const source = p.addSourceFileAtPath(sourceFilePath);

createImportDeclaration(
  source,
  ["CompilerOptions", "ParsedCommandLine"],
  "typescript",
  ImportType.NAMED_IMPORT
);

createBaseTypeExport(
  source,
  "DeepPartial",
  `{
    [K in keyof T]?: T extends Record<string, unknown> ? DeepPartial<T[K]> : T[K];
  }`,
  [{ name: "T", constraint: "any" }]
);

createBaseInterfaceExport(
  source,
  "IEmpty",
  [],
  [{ keyName: "key", keyType: "string", returnType: "any" }],
  []
);

createBaseInterfaceExport(
  source,
  "IFoo",
  ["IEmpty"],
  [],
  [
    {
      name: "parsedCommandLine",
      type: "DeepPartial<ParsedCommandLine>",
    },
    {
      name: "compilerOptions",
      type: "DeepPartial<CompilerOptions>",
    },
  ]
);
