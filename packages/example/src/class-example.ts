import { Project } from "ts-morph";
import path from "path";
import fs from "fs-extra";
import {
  createBaseClass,
  createBaseClassProp,
  createBaseClassDecorator,
  createBaseInterfaceExport,
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
  ["PrimaryGeneratedColumn", "Column", "BaseEntity", "Entity"],
  "typeorm",
  ImportType.NAMED_IMPORTS
);

createBaseInterfaceExport(
  source,
  "IUser",
  [],
  [],
  [
    {
      name: "id",
      type: "number",
    },
    {
      name: "name",
      type: "string",
    },
  ]
);

createBaseClass(source, {
  name: "User",
  isDefaultExport: true,
  extends: "BaseEntity",
  implements: ["IUser"],
});

createBaseClassDecorator(source, "User", {
  name: "Entity",
  arguments: [],
});

createBaseClassProp(source, "User", {
  name: "id",
  type: "number",
  decorators: [{ name: "PrimaryGeneratedColumn", arguments: [] }],
});

createBaseClassProp(source, "User", {
  name: "name",
  type: "string",
  decorators: [{ name: "Column", arguments: [] }],
});
