import { getExportVariableStatements } from "./src/export";
import { Project } from "ts-morph";
import path from "path";

const source = new Project().addSourceFileAtPath(
  path.resolve(__dirname, "./fixtures.ts")
);

getExportVariableStatements(source);
