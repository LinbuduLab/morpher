import { ImportDeclaration, SourceFile, SyntaxKind, Project } from "ts-morph";
import path from "path";

export function getImportDeclaration(source: SourceFile): ImportDeclaration[];

export function getImportDeclaration(
  source: SourceFile,
  moduleSpecifier: string
): ImportDeclaration | undefined;

export function getImportDeclaration(
  source: SourceFile,
  moduleSpecifier: string[]
): ImportDeclaration[];

export function getImportDeclaration(
  source: SourceFile,
  moduleSpecifier?: string | string[]
): undefined | ImportDeclaration | ImportDeclaration[] {
  const importDeclarations = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    ?.getChildrenOfKind(SyntaxKind.ImportDeclaration);

  const result = importDeclarations ?? [];

  return moduleSpecifier
    ? Array.isArray(moduleSpecifier)
      ? result.filter((dec) =>
          moduleSpecifier.includes(getModuleSpecifierText(dec))
        )
      : result.find((dec) =>
          moduleSpecifier.includes(getModuleSpecifierText(dec))
        )
    : result;
}

export function getImportDeclarationModuleSpecifier(
  source: SourceFile
): string[] {
  const importDeclarations = source
    .getFirstChildByKind(SyntaxKind.SyntaxList)
    ?.getChildrenOfKind(SyntaxKind.ImportDeclaration);

  return (importDeclarations ?? []).map(getModuleSpecifierText);
}

export function getModuleSpecifierText(importDec: ImportDeclaration): string {
  return importDec
    .getFirstChildByKind(SyntaxKind.StringLiteral)
    ?.getText()
    .replace("'", "")
    .replace("'", "")
    .replace('"', "")
    .replace('"', "")!;
}

const project = new Project();

const source = project.addSourceFileAtPath(
  path.resolve(__dirname, "./base.ts")
);

const x = getImportDeclaration(source, ["chalk"]);
console.log(x.map((x) => x.getText()));
