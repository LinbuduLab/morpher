import { Project } from "ts-morph";
import path from "path";
import {
  checkImportExistByModuleSpecifier,
  checkImportType,
  checkImportTypeByModuleSpecifier,
  checkIsDefaultImportByModuleSpecifier,
  checkIsDefaultImportDeclaration,
  checkIsNamedImportByModuleSpecifier,
  checkIsDefaultWithNamedImportByModuleSpecifier,
  checkIsDefaultWithNamedImportDeclaration,
  checkIsNamedImportDeclaration,
  checkIsNamespaceImportByModuleSpecifier,
  checkIsNamespaceImportDeclaration,
  checkIsTypeOnlyImportByModuleSpecifier,
  checkSourceFileHasImports,
} from "../src/import";
import { getImportDeclarations } from "@ts-morpher/helper";
import { ImportType } from "@ts-morpher/types";

const source = new Project().addSourceFileAtPath(
  path.resolve(__dirname, "./fixtures/import.fixture.ts")
);

const source2 = new Project().addSourceFileAtPath(
  path.resolve(__dirname, "./fixtures/empty.fixture.ts")
);

describe("package/checker-import", () => {
  it("should check import declarations", () => {
    expect(checkSourceFileHasImports(source)).toBeTruthy();
    expect(checkSourceFileHasImports(source2)).toBeFalsy();

    expect(
      checkIsDefaultImportDeclaration(getImportDeclarations(source, "fs")!)
    ).toBeTruthy();
    expect(
      checkIsDefaultImportDeclaration(getImportDeclarations(source, "path")!)
    ).toBeFalsy();
    expect(
      checkIsDefaultImportDeclaration(
        getImportDeclarations(source, "typescript")!
      )
    ).toBeFalsy();
    expect(
      checkIsDefaultImportDeclaration(getImportDeclarations(source)[0])
    ).toBeFalsy();
    expect(
      checkIsDefaultImportDeclaration(
        getImportDeclarations(source, ["typescript"])![0]
      )
    ).toBeFalsy();
    expect(
      checkIsDefaultWithNamedImportDeclaration(
        getImportDeclarations(source, "child_process")!
      )
    ).toBeTruthy();

    expect(
      checkIsNamedImportDeclaration(getImportDeclarations(source, "fs")!)
    ).toBeFalsy();
    expect(
      checkIsNamedImportDeclaration(getImportDeclarations(source, "path")!)
    ).toBeFalsy();
    expect(
      checkIsNamedImportDeclaration(
        getImportDeclarations(source, "typescript")!
      )
    ).toBeTruthy();
    expect(
      checkIsDefaultWithNamedImportDeclaration(
        getImportDeclarations(source, "fs")!
      )
    ).toBeFalsy();

    expect(
      checkIsNamespaceImportDeclaration(getImportDeclarations(source, "fs")!)
    ).toBeFalsy();
    expect(
      checkIsNamespaceImportDeclaration(getImportDeclarations(source, "path")!)
    ).toBeTruthy();
    expect(
      checkIsNamespaceImportDeclaration(
        getImportDeclarations(source, "typescript")!
      )
    ).toBeFalsy();
    expect(
      checkIsDefaultWithNamedImportDeclaration(
        getImportDeclarations(source, "path")!
      )
    ).toBeFalsy();
  });

  it("should check import module specifiers", () => {
    expect(checkImportExistByModuleSpecifier(source, "fs")).toBeTruthy();
    expect(checkImportExistByModuleSpecifier(source, "chalk")).toBeFalsy();

    expect(checkIsNamedImportByModuleSpecifier(source, "path")).toBeFalsy();
    expect(
      checkIsNamespaceImportByModuleSpecifier(source, "path")
    ).toBeTruthy();
    expect(checkIsDefaultImportByModuleSpecifier(source, "path")).toBeFalsy();
    expect(
      checkIsDefaultWithNamedImportByModuleSpecifier(source, "path")
    ).toBeFalsy();

    expect(checkIsNamedImportByModuleSpecifier(source, "fs")).toBeFalsy();
    expect(checkIsNamespaceImportByModuleSpecifier(source, "fs")).toBeFalsy();
    expect(checkIsDefaultImportByModuleSpecifier(source, "fs")).toBeTruthy();
    expect(
      checkIsDefaultWithNamedImportByModuleSpecifier(source, "fs")
    ).toBeFalsy();

    expect(
      checkIsNamedImportByModuleSpecifier(source, "typescript")
    ).toBeTruthy();
    expect(
      checkIsNamespaceImportByModuleSpecifier(source, "typescript")
    ).toBeFalsy();
    expect(
      checkIsDefaultImportByModuleSpecifier(source, "typescript")
    ).toBeFalsy();
    expect(
      checkIsDefaultWithNamedImportByModuleSpecifier(source, "typescript")
    ).toBeFalsy();

    expect(
      checkIsNamedImportByModuleSpecifier(source, "child_process")
    ).toBeTruthy();
    expect(
      checkIsNamespaceImportByModuleSpecifier(source, "child_process")
    ).toBeFalsy();
    expect(
      checkIsDefaultImportByModuleSpecifier(source, "child_process")
    ).toBeTruthy();
    expect(
      checkIsDefaultWithNamedImportByModuleSpecifier(source, "child_process")
    ).toBeTruthy();
  });

  it("should check import type", () => {
    expect(checkImportTypeByModuleSpecifier(source, "fs")).toBe(
      ImportType.DEFAULT_IMPORT
    );
    expect(checkImportTypeByModuleSpecifier(source, "path")).toBe(
      ImportType.NAMESPACE_IMPORT
    );
    expect(checkImportTypeByModuleSpecifier(source, "typescript")).toBe(
      ImportType.NAMED_IMPORT
    );
    expect(checkImportTypeByModuleSpecifier(source, "child_process")).toBe(
      ImportType.DEFAULT_WITH_NAMED_IMPORT
    );

    expect(checkImportType(getImportDeclarations(source, "fs")!)).toBe(
      ImportType.DEFAULT_IMPORT
    );
    expect(checkImportType(getImportDeclarations(source, "path")!)).toBe(
      ImportType.NAMESPACE_IMPORT
    );
    expect(checkImportType(getImportDeclarations(source, "typescript")!)).toBe(
      ImportType.NAMED_IMPORT
    );
    expect(
      checkImportType(getImportDeclarations(source, "child_process")!)
    ).toBe(ImportType.DEFAULT_WITH_NAMED_IMPORT);

    expect(checkImportType(getImportDeclarations(source, "net")!)).toBe(
      ImportType.DIRECTLY_IMPORT
    );
  });

  it("should check type only impoty", () => {
    expect(checkIsTypeOnlyImportByModuleSpecifier(source, "fs")).toBeFalsy();
    expect(
      checkIsTypeOnlyImportByModuleSpecifier(source, "child_process")
    ).toBeFalsy();
    expect(
      checkIsTypeOnlyImportByModuleSpecifier(source, "buffer")
    ).toBeTruthy();
  });
});
