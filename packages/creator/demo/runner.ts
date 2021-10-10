import { createBaseTypeExport } from "../src/export";
import path from "path";
import { Project } from "ts-morph";

const source = new Project().addSourceFileAtPath(
  path.resolve(__dirname, "./fixtures.ts")
);

createBaseTypeExport(source, "Foo", "Record<T, unknown>", [
  {
    name: "T",
    default: "'default_string_literal'",
    constraint: "string",
  },
]);
