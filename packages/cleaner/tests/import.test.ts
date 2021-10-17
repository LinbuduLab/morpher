import { Project, SourceFile } from "ts-morph";
import path from "path";
import fs from "fs-extra";
import { checkSourceFileHasImports } from "@ts-morpher/checker";
import {
  getImportDeclarations,
  getImportModuleSpecifiers,
  getTypeOnlyImportModuleSpecifiers,
} from "@ts-morpher/helper";

import {
  removeAllImports,
  removeAllTypeOnlyImports,
  removeImportDeclarationByModuleSpecifier,
  removeImportDeclarationByType,
} from "../src/import";

const p = new Project();

let source: SourceFile;

let source2: SourceFile;

const savedContent = fs.readFileSync(
  path.resolve(__dirname, "./fixtures/import.fixture.ts")
);

const savedContent2 = fs.readFileSync(
  path.resolve(__dirname, "./fixtures/empty.fixture.ts")
);

beforeEach(() => {
  source && p.removeSourceFile(source);
  source && p.removeSourceFile(source2);

  source = p.addSourceFileAtPath(
    path.resolve(__dirname, "./fixtures/import.fixture.ts")
  );

  source2 = p.addSourceFileAtPath(
    path.resolve(__dirname, "./fixtures/empty.fixture.ts")
  );
});

afterEach(() => {
  fs.writeFileSync(
    path.resolve(__dirname, "./fixtures/import.fixture.ts"),
    savedContent
  );

  fs.writeFileSync(
    path.resolve(__dirname, "./fixtures/empty.fixture.ts"),
    savedContent2
  );
});

describe("package/cleaner-cleaner", () => {
  it("should remove all imports", () => {
    expect(checkSourceFileHasImports(source)).toBeTruthy();
    removeAllImports(source);
    expect(checkSourceFileHasImports(source)).toBeFalsy();

    expect(checkSourceFileHasImports(source2)).toBeFalsy();
    removeAllImports(source2);
    expect(checkSourceFileHasImports(source2)).toBeFalsy();
  });

  it("should remove all type-only imports", () => {
    expect(checkSourceFileHasImports(source)).toBeTruthy();
    removeAllTypeOnlyImports(source);
    expect(checkSourceFileHasImports(source)).toBeTruthy();
    expect(getTypeOnlyImportModuleSpecifiers(source)).toEqual([]);
    expect(getImportDeclarations(source).length).toBe(4);
  });

  it("should remove by module specifiers 1", () => {
    expect(checkSourceFileHasImports(source)).toBeTruthy();
    expect(getImportDeclarations(source).length).toBe(6);
    removeImportDeclarationByModuleSpecifier(source, ["path"]);
    expect(checkSourceFileHasImports(source)).toBeTruthy();
    expect(getImportDeclarations(source).length).toBe(5);
    expect(getImportDeclarations(source, "path")).toBeUndefined();
  });

  it("should remove by module specifiers 2", () => {
    expect(checkSourceFileHasImports(source)).toBeTruthy();
    expect(getImportDeclarations(source).length).toBe(6);
    removeImportDeclarationByModuleSpecifier(source, ["path", "buffer"]);
    expect(checkSourceFileHasImports(source)).toBeTruthy();
    expect(getImportDeclarations(source).length).toBe(4);
    expect(getImportDeclarations(source, "path")).toBeUndefined();
    expect(getImportDeclarations(source, "buffer")).toBeUndefined();
  });

  it("should remove by import type - named", () => {
    expect(checkSourceFileHasImports(source)).toBeTruthy();
    removeImportDeclarationByType(source, { named: true });
    expect(checkSourceFileHasImports(source)).toBeTruthy();
    expect(getImportModuleSpecifiers(source).sort()).toEqual(
      ["path", "fs", "child_process"].sort()
    );
  });

  it("should remove by import type - namespace", () => {
    expect(checkSourceFileHasImports(source)).toBeTruthy();
    removeImportDeclarationByType(source, { namespace: true });
    expect(checkSourceFileHasImports(source)).toBeTruthy();
    expect(getImportModuleSpecifiers(source).sort()).toEqual(
      ["typescript", "buffer", "fs", "child_process"].sort()
    );
  });

  it("should remove by import type - default", () => {
    expect(checkSourceFileHasImports(source)).toBeTruthy();
    removeImportDeclarationByType(source, { default: true });
    expect(checkSourceFileHasImports(source)).toBeTruthy();
    expect(getImportModuleSpecifiers(source).sort()).toEqual(
      ["path", "typescript", "child_process", "buffer"].sort()
    );
  });

  it("should remove by import type - skipped", () => {
    expect(checkSourceFileHasImports(source2)).toBeFalsy();
    removeImportDeclarationByType(source2, { default: true });
    expect(checkSourceFileHasImports(source2)).toBeFalsy();
  });
});
