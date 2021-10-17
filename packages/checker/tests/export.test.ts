import { Project, VariableDeclarationKind } from "ts-morph";
import path from "path";
import {
  checkSourceFileHasExports,
  checkExportDeclarationKindByIdentifier,
  checkExportDeclarationKindByStatement,
  checkExportExistByIdentifier,
  checkInterfaceExportExistByIdentifier,
  checkTypeExportExistByIdentifier,
  checkSourceFileHasTypeExports,
} from "../src/export";
import { getExportVariableStatements } from "@ts-morpher/helper";

const source = new Project().addSourceFileAtPath(
  path.resolve(__dirname, "./fixtures/export.fixture.ts")
);

const source2 = new Project().addSourceFileAtPath(
  path.resolve(__dirname, "./fixtures/empty.fixture.ts")
);

describe("package/checker-export", () => {
  it("should check source file", () => {
    expect(checkSourceFileHasExports(source)).toBeTruthy();
    expect(checkSourceFileHasExports(source2)).toBeFalsy();
    expect(checkSourceFileHasTypeExports(source)).toBeTruthy();
    expect(checkSourceFileHasTypeExports(source2)).toBeFalsy();
  });

  it("should check by identifier", () => {
    expect(checkExportExistByIdentifier(source, "varFoo")).toBeTruthy();
    expect(checkExportExistByIdentifier(source, "letFoo")).toBeTruthy();
    expect(checkExportExistByIdentifier(source, "constFoo")).toBeTruthy();
    expect(checkExportExistByIdentifier(source, "nonExistFoo")).toBeFalsy();

    expect(checkExportDeclarationKindByIdentifier(source, "varFoo")).toBe(
      VariableDeclarationKind.Var
    );
    expect(checkExportDeclarationKindByIdentifier(source, "letFoo")).toBe(
      VariableDeclarationKind.Let
    );
    expect(checkExportDeclarationKindByIdentifier(source, "constFoo")).toBe(
      VariableDeclarationKind.Const
    );

    expect(checkTypeExportExistByIdentifier(source, "Foo")).toBeTruthy();
    expect(checkTypeExportExistByIdentifier(source, "Foo1")).toBeFalsy();

    expect(checkInterfaceExportExistByIdentifier(source, "Bar")).toBeTruthy();
    expect(checkInterfaceExportExistByIdentifier(source, "Bar1")).toBeFalsy();
  });
  it("should check by statement", () => {
    expect(
      checkExportDeclarationKindByStatement(
        getExportVariableStatements(source, "varFoo")
      )
    ).toBe(VariableDeclarationKind.Var);

    expect(
      checkExportDeclarationKindByStatement(
        getExportVariableStatements(source, "letFoo")
      )
    ).toBe(VariableDeclarationKind.Let);

    expect(
      checkExportDeclarationKindByStatement(
        getExportVariableStatements(source, "constFoo")
      )
    ).toBe(VariableDeclarationKind.Const);
  });
});
