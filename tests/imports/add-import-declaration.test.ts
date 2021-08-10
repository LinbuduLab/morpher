import fs from "fs-extra";
import path from "path";
import { addImportDeclaration } from "../../src/import";
import { ImportType } from "../../src/typings/import";
import { Project } from "ts-morph";
import { resetBaseFixture } from "../tests-helper/reset";
import { baseFilePath, readFileSync } from "../tests-helper/shared";

describe("should add correct import declaration type", () => {
  afterEach(() => {
    resetBaseFixture();
  });

  it("should add default import", () => {
    const project = new Project();
    const source = project.addSourceFileAtPath(baseFilePath);

    addImportDeclaration(source, "foo", "bar", ImportType.DEFAULT_IMPORT, true);

    expect(
      readFileSync(baseFilePath).includes("import foo from 'bar'")
    ).toBeTruthy();
  });

  it("should add namespace import", () => {
    const project = new Project();
    const source = project.addSourceFileAtPath(baseFilePath);

    addImportDeclaration(
      source,
      "foo",
      "bar",
      ImportType.NAMESPACE_IMPORT,
      true
    );

    expect(
      readFileSync(baseFilePath).includes("import * as foo from 'bar'")
    ).toBeTruthy();
  });

  it("should add named import", () => {
    const project = new Project();
    const source = project.addSourceFileAtPath(baseFilePath);

    addImportDeclaration(
      source,
      ["foo"],
      "bar",
      ImportType.NAMED_IMPORTS,
      true
    );

    expect(
      readFileSync(baseFilePath).includes("import { foo } from 'bar'")
    ).toBeTruthy();
  });

  it("should skip when using invalid import type", () => {
    const project = new Project();
    const source = project.addSourceFileAtPath(baseFilePath);

    // @ts-ignore
    addImportDeclaration(
      source,
      ["foo111"],
      "bar111",
      "__INVALID_IMPORT_TYPE__",
      true
    );

    expect(readFileSync(baseFilePath).includes("foo111")).not.toBeTruthy();
    expect(readFileSync(baseFilePath).includes("bar111")).not.toBeTruthy();
  });
});
