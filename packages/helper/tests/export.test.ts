import { Project } from "ts-morph";
import path from "path";
import {
  getExportVariableIdentifiers,
  getExportVariableStatements,
  getInterfaceExportDeclaration,
  getInterfaceExportIdentifiers,
  getTypeExportDeclaration,
  getTypeExportIdentifiers,
} from "../src/export";

const source = new Project().addSourceFileAtPath(
  path.resolve(__dirname, "./fixtures/export.fixture.ts")
);

describe("package/helper-export", () => {
  it("should return var statements", () => {
    expect(getExportVariableStatements(source).length).toBe(3);
    expect(getExportVariableStatements(source, "varFoo")).toBeDefined();
    expect(getExportVariableStatements(source, "noop")).toBeUndefined();
    expect(getExportVariableStatements(source, ["varFoo", "noop"]).length).toBe(
      1
    );
    expect(
      getExportVariableStatements(source, ["varFoo", "letFoo"]).length
    ).toBe(2);
    expect(getExportVariableStatements(source, ["noopFoo"]).length).toBe(0);
  });

  it("should return identifiers", () => {
    expect(getExportVariableIdentifiers(source)).toEqual([
      "varFoo",
      "letFoo",
      "constFoo",
    ]);

    expect(getTypeExportIdentifiers(source)).toEqual(["Foo"]);
    expect(getInterfaceExportIdentifiers(source)).toEqual(["Bar"]);
  });

  it("should return declarations", () => {
    expect(getTypeExportDeclaration(source).length).toBe(1);
    expect(getTypeExportDeclaration(source, ["Foo"]).length).toBe(1);
    expect(getTypeExportDeclaration(source, ["Foo1"]).length).toBe(0);
    expect(getTypeExportDeclaration(source, "Foo")).toBeDefined;

    expect(getInterfaceExportDeclaration(source).length).toBe(1);
    expect(getInterfaceExportDeclaration(source, ["Bar"]).length).toBe(1);
    expect(getInterfaceExportDeclaration(source, ["Bar1"]).length).toBe(0);
    expect(getInterfaceExportDeclaration(source, "Bar")).toBeDefined();
  });
});
