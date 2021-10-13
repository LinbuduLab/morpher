import { Project } from "ts-morph";
import path from "path";
import {
  ensureArray,
  getDeclarationIdentifierByKind,
  getClassDeclarations,
  getClassDecorators,
  getClassPropDeclarations,
  getClassMethodDeclarations,
  getImportDeclarations,
  getVariableIdentifier,
  getTypeOrInterfaceIdentifier,
  getExportVariableStatements,
  getTypeExportDeclaration,
} from "../src";
import { getInterfaceExportDeclaration } from "../dist";

const source = new Project().addSourceFileAtPath(
  path.resolve(__dirname, "./fixtures/util.fixture.ts")
);

describe("package/helper-util", () => {
  it("should ensure array", () => {
    expect(ensureArray("1")).toEqual(["1"]);
    expect(ensureArray(["1"])).toEqual(["1"]);
  });

  it("should return declaration identifier", () => {
    expect(
      getDeclarationIdentifierByKind(getClassDeclarations(source, "Foo"))
    ).toBe("Foo");

    expect(
      getDeclarationIdentifierByKind(
        getClassMethodDeclarations(source, "Foo", "method1")
      )
    ).toBe("method1");

    expect(
      getDeclarationIdentifierByKind(
        getClassPropDeclarations(source, "Foo", "prop1")
      )
    ).toBe("prop1");

    expect(
      getDeclarationIdentifierByKind(getImportDeclarations(source, "fs"))
    ).toBe("fs");
  });

  it("should get variable identifier", () => {
    expect(
      getVariableIdentifier(getExportVariableStatements(source, "foo"))
    ).toBe("foo");
  });

  it("should get type/interface identifier", () => {
    expect(
      getTypeOrInterfaceIdentifier(getTypeExportDeclaration(source, "TT"))
    ).toBe("TT");

    expect(
      getTypeOrInterfaceIdentifier(getInterfaceExportDeclaration(source, "IIn"))
    ).toBe("IIn");
  });
});
