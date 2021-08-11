import { ImportDeclaration, SourceFile, SyntaxKind } from "ts-morph";

// 检查是否是默认导入
export function isDefaultImport(importSpec: ImportDeclaration): boolean {
  return Boolean(importSpec.getDefaultImport());
}

// 检查是否是命名空间导入
export function isNamespaceImport(importSpec: ImportDeclaration): boolean {
  return Boolean(importSpec.getNamespaceImport());
}

// 检查是否是具名导入
export function isNamedImport(importSpec: ImportDeclaration): boolean {
  return Boolean(importSpec.getNamedImports().length);
}
