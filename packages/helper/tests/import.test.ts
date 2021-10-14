import { Project } from "ts-morph";
import path from "path";
import {
  getImportDeclarations,
  getDefaultImportDeclarations,
  getDefaultImportModuleSpecifiers,
  getImportModuleSpecifiers,
  getNamedImportDeclarations,
  getNamedImportModuleSpecifiers,
  getNamespaceImportDeclarations,
  getNamespaceImportModuleSpecifiers,
  getNodeInternalImportDeclarations,
  getNodeInternalImportModuleSpecifiers,
  getNodeModuleImportDeclarations,
  getNodeModuleImportModuleSpecifiers,
  getTypeOnlyImportDeclarations,
  getTypeOnlyImportModuleSpecifiers,
} from "../src/import";

const source = new Project().addSourceFileAtPath(
  path.resolve(__dirname, "./fixtures/import.fixture.ts")
);

describe("package/helper-import", () => {
  it("should return import declarations", () => {
    expect(getImportDeclarations(source).length).toBe(6);
    expect(getImportDeclarations(source, "path")).not.toBeUndefined();
    expect(getImportDeclarations(source, "chalk")).toBeUndefined();
    expect(getImportDeclarations(source, ["fs", "typescript"]).length).toBe(3);

    expect(getImportDeclarations(source, ["fs", "chalk"]).length).toBe(1);
    expect(getImportDeclarations(source, ["typescript", "chalk"]).length).toBe(
      2
    );
    expect(getNamedImportDeclarations(source).length).toBe(4);
    expect(getDefaultImportDeclarations(source).length).toBe(2);
    expect(getNamespaceImportDeclarations(source).length).toBe(1);
    expect(getTypeOnlyImportDeclarations(source).length).toBe(2);

    expect(
      getTypeOnlyImportDeclarations(source, "typescript")
    ).not.toBeUndefined();

    expect(
      getTypeOnlyImportDeclarations(source, ["typescript", "buffer"]).length
    ).toBe(2);

    expect(
      getTypeOnlyImportDeclarations(source, ["typescript", "chalk"]).length
    ).toBe(1);

    expect(getTypeOnlyImportDeclarations(source, "chalk")).toBeUndefined();

    expect(getNodeInternalImportDeclarations(source).length).toBe(4);
    expect(getNodeModuleImportDeclarations(source).length).toBe(2);
  });
});

it("should get identifiers", () => {
  expect(getDefaultImportModuleSpecifiers(source)).toEqual([
    "fs",
    "child_process",
  ]);

  expect(getImportModuleSpecifiers(source)).toEqual([
    "path",
    "fs",
    "typescript",
    "child_process",
    "buffer",
  ]);

  expect(getNamedImportModuleSpecifiers(source)).toEqual([
    "typescript",
    "child_process",
    "buffer",
  ]);

  expect(getNamespaceImportModuleSpecifiers(source)).toEqual(["path"]);

  expect(getNodeInternalImportModuleSpecifiers(source)).toEqual([
    "path",
    "fs",
    "child_process",
    "buffer",
  ]);

  expect(getNodeModuleImportModuleSpecifiers(source)).toEqual(["typescript"]);

  expect(getTypeOnlyImportModuleSpecifiers(source)).toEqual([
    "buffer",
    "typescript",
  ]);
});
