import { createBaseInterfaceExport } from "../src/export";
import path from "path";
import { Project } from "ts-morph";

const source = new Project().addSourceFileAtPath(
  path.resolve(__dirname, "./fixtures.ts")
);

createBaseInterfaceExport(
  source,
  "Foo",
  ["Bar", "Baz"],
  [
    {
      keyName: "Foo",
      keyType: "string",
      returnType: "unknown",
      isReadonly: false,
    },
  ],
  [
    {
      name: "name",
      type: "string",
    },
    {
      name: "age",
      type: "number",
      hasQuestionToken: true,
    },
    {
      name: "other",
      type: "T",
    },
  ],
  [
    {
      name: "T",
      default: "'default_string_literal'",
      constraint: "string",
    },
  ]
);
