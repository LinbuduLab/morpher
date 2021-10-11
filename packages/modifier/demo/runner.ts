import { updateTypeExportStructure } from "../src/export";
import path from "path";
import { Project } from "ts-morph";

const source = new Project().addSourceFileAtPath(
  path.resolve(__dirname, "./fixtures.ts")
);

updateTypeExportStructure(source, "A", {
  name: "B",
  type: "{a:'1'}",
});
