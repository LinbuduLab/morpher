# Quick Start

## Installation

```bash
# ts-morph should be installed as peer dependencies to keep singleton
yarn add ts-morph
# install specific package in need
yarn add @ts-morpher/checker @ts-morpher/helper
```

- `helper`: Get `AST node declaration` or `identifier` and pass it to consumer like `checker` package.
- `checker`: Check `declaration type` or `does declaration exist` by `identifier`/`declaration`.
- `cleaner`: Remove `AST declaration`.
- `creator`: Create `AST declaration` from simplified & friendly structure info.
- `modifier`: Update `AST declaration` structure, or just update `identifier`、`declare kind`.
- `types`: Essential types utilities.

> More examaple is coming soon...

## Create Import Declaration

```typescript
import { Project } from "ts-morph";
import path from "path";
import fs from "fs-extra";
import assert from "assert";
import { createImportDeclaration } from "@ts-morpher/creator";
import { checkImportExistByModuleSpecifier } from "@ts-morpher/checker";
import { ImportType } from "@ts-morpher/types";

const sourceFilePath = path.join(__dirname, "./source.ts");

fs.rmSync(sourceFilePath);
fs.ensureFileSync(sourceFilePath);

const p = new Project();
const source = p.addSourceFileAtPath(sourceFilePath);

createImportDeclaration(
  source,
  ["ts", "transpileModule", "CompilerOptions"],
  "typescript",
  ImportType.DEFAULT_WITH_NAMED_IMPORT
);

createImportDeclaration(
  source,
  ["SourceFile", "VariableDeclarationKind"],
  "ts-morph",
  ImportType.NAMED_IMPORTS,
  true
);

assert(checkImportExistByModuleSpecifier(source, "typescript") === true);
assert(checkImportExistByModuleSpecifier(source, "ts-morph") === true);
```

Which creating file content below:

```typescript
import ts, { transpileModule, CompilerOptions } from "typescript";
import type { SourceFile, VariableDeclarationKind } from "ts-morph";
```
