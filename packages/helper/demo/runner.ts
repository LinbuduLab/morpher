import path from "path";
import { Project, SyntaxKind } from "ts-morph";
import { getDefaultImportDeclarations } from "../src";

const source = new Project().addSourceFileAtPath(
  path.resolve(__dirname, "./fixtures.ts")
);

getDefaultImportDeclarations(source);
