import { Project, SourceFile, VariableDeclarationKind } from "ts-morph";
import path from "path";
import fs from "fs-extra";
import {
  checkExportDeclarationKindByIdentifier,
  checkExportDeclarationKindByStatement,
  checkExportExistByIdentifier,
  checkTypeExportExistByIdentifier,
  checkInterfaceExportExistByIdentifier,
  checkSourceFileHasExports,
  checkSourceFileHasTypeExports,
} from "@ts-morpher/checker";
import {
  getExportVariableIdentifiers,
  getExportVariableStatements,
  getTypeExportDeclaration,
  getTypeExportIdentifiers,
  getInterfaceExportDeclaration,
  getInterfaceExportIdentifiers,
} from "@ts-morpher/helper";

import {
  removeExportStatementsByExportType,
  removeExportStatementsByIdentifier,
  removeInterfaceExportByIdentifier,
  removeTypeExportByIdentifier,
} from "../src/export";

const p = new Project();

let source: SourceFile;

let source2: SourceFile;

const savedContent = fs.readFileSync(
  path.resolve(__dirname, "./fixtures/export.fixture.ts")
);

const savedContent2 = fs.readFileSync(
  path.resolve(__dirname, "./fixtures/empty.fixture.ts")
);

beforeEach(() => {
  source && p.removeSourceFile(source);
  source && p.removeSourceFile(source2);

  source = p.addSourceFileAtPath(
    path.resolve(__dirname, "./fixtures/export.fixture.ts")
  );

  source2 = p.addSourceFileAtPath(
    path.resolve(__dirname, "./fixtures/empty.fixture.ts")
  );
});

afterEach(() => {
  fs.writeFileSync(
    path.resolve(__dirname, "./fixtures/export.fixture.ts"),
    savedContent
  );

  fs.writeFileSync(
    path.resolve(__dirname, "./fixtures/empty.fixture.ts"),
    savedContent2
  );
});

describe("package/cleaner-export", () => {
  it("should remove variable export", () => {
    expect(checkSourceFileHasExports(source)).toBeTruthy();
    removeExportStatementsByIdentifier(source);
    expect(checkSourceFileHasExports(source)).toBeFalsy();
  });
  it("should remove variable export by identifier", () => {
    expect(checkSourceFileHasExports(source)).toBeTruthy();
    removeExportStatementsByIdentifier(source, "letFoo");
    expect(checkSourceFileHasExports(source)).toBeTruthy();
    expect(getExportVariableIdentifiers(source)).not.toContain("letFoo");
  });

  it("should remove variable export by type 1", () => {
    expect(checkSourceFileHasExports(source)).toBeTruthy();
    removeExportStatementsByExportType(source, {
      const: true,
    });
    expect(checkSourceFileHasExports(source)).toBeTruthy();
    expect(getExportVariableIdentifiers(source)).not.toContain("constFoo");
  });

  it("should remove variable export by type 2", () => {
    expect(checkSourceFileHasExports(source)).toBeTruthy();
    removeExportStatementsByExportType(source, {
      const: true,
      let: true,
      var: true,
    });
    expect(checkSourceFileHasExports(source)).toBeFalsy();
  });

  it("should remove type export: type alias - all", () => {
    expect(checkSourceFileHasTypeExports(source)).toBeTruthy();
    removeTypeExportByIdentifier(source, null);
    expect(checkSourceFileHasTypeExports(source)).toBeTruthy();
    expect(getTypeExportIdentifiers(source)).not.toContain("Foo1");
    expect(getTypeExportIdentifiers(source)).not.toContain("Foo2");
  });

  it("should remove type export: type alias - identifier", () => {
    expect(checkSourceFileHasTypeExports(source)).toBeTruthy();
    removeTypeExportByIdentifier(source, "Foo1");
    expect(checkSourceFileHasTypeExports(source)).toBeTruthy();
    expect(getTypeExportIdentifiers(source)).not.toContain("Foo1");
    expect(getTypeExportIdentifiers(source)).toContain("Foo2");
  });

  it("should remove type export: type alias - identifiers", () => {
    expect(checkSourceFileHasTypeExports(source)).toBeTruthy();
    removeTypeExportByIdentifier(source, ["Foo1", "Foo2"]);
    expect(checkSourceFileHasTypeExports(source)).toBeTruthy();
    expect(getTypeExportIdentifiers(source)).not.toContain("Foo1");
    expect(getTypeExportIdentifiers(source)).not.toContain("Foo2");
  });

  it("should remove type export: interface - all", () => {
    expect(checkSourceFileHasTypeExports(source)).toBeTruthy();
    removeInterfaceExportByIdentifier(source, null);
    expect(checkSourceFileHasTypeExports(source)).toBeTruthy();
    expect(getInterfaceExportIdentifiers(source)).not.toContain("Bar1");
    expect(getInterfaceExportIdentifiers(source)).not.toContain("Bar2");
  });

  it("should remove type export: interface - identifier", () => {
    expect(checkSourceFileHasTypeExports(source)).toBeTruthy();
    removeInterfaceExportByIdentifier(source, "Bar1");
    expect(checkSourceFileHasTypeExports(source)).toBeTruthy();
    expect(getInterfaceExportIdentifiers(source)).not.toContain("Bar1");
    expect(getInterfaceExportIdentifiers(source)).toContain("Bar2");
  });

  it("should remove type export: interface - identifiers", () => {
    expect(checkSourceFileHasTypeExports(source)).toBeTruthy();
    removeInterfaceExportByIdentifier(source, ["Bar1", "Bar2"]);
    expect(checkSourceFileHasTypeExports(source)).toBeTruthy();
    expect(getInterfaceExportIdentifiers(source)).not.toContain("Bar1");
    expect(getInterfaceExportIdentifiers(source)).not.toContain("Bar2");
  });

  it("should skip when inexist", () => {
    const prevIdentifies = getExportVariableIdentifiers(source);
    removeExportStatementsByIdentifier(source, "XXXX");
    expect(getExportVariableIdentifiers(source)).toEqual(prevIdentifies);

    const prevTypeAliasIdentifies = getTypeExportIdentifiers(source);
    removeTypeExportByIdentifier(source, "XXXX");
    expect(getTypeExportIdentifiers(source)).toEqual(prevTypeAliasIdentifies);

    const prevInterfaceIdentifies = getInterfaceExportIdentifiers(source);
    removeInterfaceExportByIdentifier(source, "XXXX");
    expect(getInterfaceExportIdentifiers(source)).toEqual(
      prevInterfaceIdentifies
    );

    removeExportStatementsByExportType(source2);
    expect(
      fs.readFileSync(path.resolve(__dirname, "./fixtures/empty.fixture.ts"))
    ).toEqual(savedContent2);
  });
});
