# Quick Start

## Why TSMorpher?

> 中文版简介请往下翻一些~

The AST interfaces provided by `TypeScript` itself are too complex and less stable (e.g., it once converged all AST interfaces under the `factory` namespace in one version), so [ts-morph](https://ts-morph.com/) was born, which provides better support for `TypeScript` AST utilities than other AST wrappers and simplifies many operations to some extent, blocking `Node`, `TypeNode`, `Syntax`, `Statement`, `Declaration`, and a host of other concepts that are not friendly to developers who have not learned or know little about `Compilation Principles`, but **I think AST operations could be simpler and more intuitive**, like what the `Lodash` functions and `RxJS` operators do, calling a method, which returns the result I want, done!

That's what an AST operation should follow, **get a declaration, see if it's the structure we want, and if not, we modify the declaration, save it, and call it a day**. If you are not trying to learn `Compilation Principles` through these AST operations, then there is no need and no reason to spend extra time understanding the concepts.

`ts-morpher` aims to provide a series of intuitive imperative APIs to further reduce the cost of using AST operations on top of `ts-morph`. It spreads out different types of operations under different npm packages, such as `checker`, `creator`, etc. If you want to see exactly how it further reduces the mental burden, check out the examples below.

**This project currently only supports a few common syntax types, such as `Import` / `Export` / `Class`, support for `Function` and `TSX` is difficult to predict when it will be available, if you are interested, welcome to submit PR to make this project better, so that more people can enjoy low-cost AST operations.**

`TypeScript` 自身 提供的 AST 接口 过于复杂，并且稳定性较差（如它曾经在某一个版本将所有 AST 接口收敛到了 `factory` 命名空间下），因此 [ts-morph](https://ts-morph.com/) 诞生了，相比于其他 AST 封装库，`ts-morph` 对 TypeScript 有着更好的支持（毕竟它本身就基于 TypeScript AST API 封装而来），并且在一定程度上简化了许多操作，屏蔽了 `Node`、`TypeNode`、`Syntax`、`Statement`、`Declaration` 等等一系列对于那些没有学习过或者是对其知之甚少编译原理的开发者算不上友好的概念。但是，**我想 AST 操作还可以更简单、更符合直觉一些**，就像 `Lodash` 函数、`RxJS` 操作符所做的那样，调用一个方法，它返回我想要的结果，done！

AST 操作也本该如此，获取一个声明，看看它是否是我们想要的结构，如果不是，我们修改这个声明，保存，然后就结束。如果你并不是想要通过这些 AST 操作学习编译原理，那么就没有必要也不应该花费额外的时间去了解相关概念。

`ts-morpher` 旨在提供一系列符合直觉的命令式 API 来在 ts-morph 的基础上进一步降低 AST 操作的使用成本，并将不同类型的操作分散在不同的 · 下，如 checker、creator 等。如果你想了解它到底是如何进一步降低心智负担的，请查看下面的示例。

**这一项目目前仅支持部分语法类型，如导入、导出以及 Class，对于其他重要部分如 函数 与 TSX 的支持还无法预知将在何时完成，如果也感兴趣，欢迎提交 PR 来让这个项目变得更好，让更多的人可以享受丝滑的 AST 操作。**

## Installation

```bash
# ts-morph should be installed as peer dependence to keep it singleton
yarn add ts-morph
# install specific package in need
yarn add @ts-morpher/checker @ts-morpher/helper @ts-morpher/creator @ts-morpher/creator @ts-morpher/modifier @ts-morpher/types
```

Avaliable Packages:

- `helper`: Get `AST declaration` or `identifier`, and pass it to consumer like `checker` package. **e.g. Get all import declarations exist in current source file.**
- `checker`: Check `declaration type` / `declaration existence` by `identifier` or `declaration`. **e.g. Check does import exist by module specifier.**
- `cleaner`: Remove `AST declaration` by `identifier`. **e.g. Remove all type-only import declarations from current source file.**
- `creator`: Create `AST declaration` from simplified structure info. **e.g. Create import declarations for polyfill, `import 'reflect-metadata'`.**
- `modifier`: Update `AST declaration` structure, or just update `identifier`、`declare kind`. **e.g. Update class identifier.**
- `types`: Essential types utilities shared by packages above, in most cases you will need install it. **e.g. [ImportType](types-docs/enums/import.ImportType.md), which describes possbile import type in ES Module.**

## Examples

### Create Import Declaration

Basic example, create import declarations.

```bash
lerna exec yarn dev:create-import --scope @ts-morpher/example
```

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

createImportDeclaration(source, "fs", "fs-extra", ImportType.DEFAULT_IMPORT);

createImportDeclaration(source, "path", "path", ImportType.NAMESPACE_IMPORT);

createImportDeclaration(
  source,
  ["exec", "execSync", "spawn", "spawnSync"],
  "child_process",
  ImportType.NAMED_IMPORT
);

createImportDeclaration(
  source,
  // First item will be regarded as default import, and rest will be used as named imports.
  ["ts", "transpileModule", "CompilerOptions", "factory"],
  "typescript",
  ImportType.DEFAULT_WITH_NAMED_IMPORT
);

createImportDeclaration(
  source,
  ["SourceFile", "VariableDeclarationKind"],
  "ts-morph",
  ImportType.NAMED_IMPORT,
  true
);

assert(checkImportExistByModuleSpecifier(source, "fs-extra") === true);
assert(checkImportExistByModuleSpecifier(source, "path") === true);
assert(checkImportExistByModuleSpecifier(source, "child_process") === true);
assert(checkImportExistByModuleSpecifier(source, "typescript") === true);
assert(checkImportExistByModuleSpecifier(source, "ts-morph") === true);
```

Creating file content below:

```typescript
import fs from "fs-extra";
import * as path from "path";
import { exec, execSync, spawn, spawnSync } from "child_process";
import ts, { transpileModule, CompilerOptions, factory } from "typescript";
import type { SourceFile, VariableDeclarationKind } from "ts-morph";
```

### Create Class Declaration

Create class declarations.

```bash
lerna exec yarn dev:create-class --scope @ts-morpher/example
```

```typescript
import { Project } from "ts-morph";
import path from "path";
import fs from "fs-extra";
import {
  createBaseClass,
  createBaseClassProp,
  createBaseClassDecorator,
  createBaseInterfaceExport,
  createImportDeclaration,
} from "@ts-morpher/creator";
import { ImportType } from "@ts-morpher/types";

const sourceFilePath = path.join(__dirname, "./source.ts");

fs.rmSync(sourceFilePath);
fs.ensureFileSync(sourceFilePath);

const p = new Project();
const source = p.addSourceFileAtPath(sourceFilePath);

createImportDeclaration(
  source,
  ["PrimaryGeneratedColumn", "Column", "BaseEntity", "Entity"],
  "typeorm",
  ImportType.NAMED_IMPORTS
);

createBaseInterfaceExport(
  source,
  "IUser",
  [],
  [],
  [
    {
      name: "id",
      type: "number",
    },
    {
      name: "name",
      type: "string",
    },
  ]
);

createBaseClass(source, {
  name: "User",
  isDefaultExport: true,
  extends: "BaseEntity",
  implements: ["IUser"],
});

createBaseClassDecorator(source, "User", {
  name: "Entity",
  arguments: [],
});

createBaseClassProp(source, "User", {
  name: "id",
  type: "number",
  decorators: [{ name: "PrimaryGeneratedColumn", arguments: [] }],
});

createBaseClassProp(source, "User", {
  name: "name",
  type: "string",
  decorators: [{ name: "Column", arguments: [] }],
});
```

Creating file content below:

```typescript
import { PrimaryGeneratedColumn, Column, BaseEntity, Entity } from "typeorm";

export interface IUser {
  id: number;
  name: string;
}

@Entity()
export default class User extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
```

### Create Export

Create type alias / interface export.

```bash
lerna exec yarn dev:create-export --scope @ts-morpher/example
```

```typescript
import { Project } from "ts-morph";
import path from "path";
import fs from "fs-extra";
import assert from "assert";
import {
  createBaseInterfaceExport,
  createBaseTypeExport,
  createImportDeclaration,
} from "@ts-morpher/creator";
import { ImportType } from "@ts-morpher/types";

const sourceFilePath = path.join(__dirname, "./source.ts");

fs.rmSync(sourceFilePath);
fs.ensureFileSync(sourceFilePath);

const p = new Project();
const source = p.addSourceFileAtPath(sourceFilePath);

createImportDeclaration(
  source,
  ["CompilerOptions", "ParsedCommandLine"],
  "typescript",
  ImportType.NAMED_IMPORT
);

createBaseTypeExport(
  source,
  "DeepPartial",
  `{
    [K in keyof T]?: T extends Record<string, unknown> ? DeepPartial<T[K]> : T[K];
  }`,
  [{ name: "T", constraint: "any" }]
);

createBaseInterfaceExport(
  source,
  "IEmpty",
  [],
  [{ keyName: "key", keyType: "string", returnType: "any" }],
  []
);

createBaseInterfaceExport(
  source,
  "IFoo",
  ["IEmpty"],
  [],
  [
    {
      name: "parsedCommandLine",
      type: "DeepPartial<ParsedCommandLine>",
    },
    {
      name: "compilerOptions",
      type: "DeepPartial<CompilerOptions>",
    },
  ]
);
```

Creating file content below:

```typescript
import { CompilerOptions, ParsedCommandLine } from "typescript";

export type DeepPartial<T extends any> = {
  [K in keyof T]?: T extends Record<string, unknown> ? DeepPartial<T[K]> : T[K];
};

export interface IEmpty {
  [key: string]: any;
}

export interface IFoo extends IEmpty {
  parsedCommandLine: DeepPartial<ParsedCommandLine>;
  compilerOptions: DeepPartial<CompilerOptions>;
}
```

### Append Statements

Append plain statements after import declarations block.

```bash
lerna exec yarn dev:append-statements --scope @ts-morpher/example
```

```typescript
import { Project } from "ts-morph";
import path from "path";
import fs from "fs-extra";
import assert from "assert";
import {
  createImportDeclaration,
  appendStatementAfterImportDeclarations,
} from "@ts-morpher/creator";
import { ImportType } from "@ts-morpher/types";

const sourceFilePath = path.join(__dirname, "./source.ts");

fs.rmSync(sourceFilePath);
fs.ensureFileSync(sourceFilePath);

const p = new Project();
const source = p.addSourceFileAtPath(sourceFilePath);

createImportDeclaration(source, "fs", "fs-extra", ImportType.DEFAULT_IMPORT);

createImportDeclaration(source, "path", "path", ImportType.NAMESPACE_IMPORT);

appendStatementAfterImportDeclarations(source, "const songName = 'Sugar';");
appendStatementAfterImportDeclarations(source, "const singler = 'Maroon 5';");
```

Creating file content below:

```typescript
import fs from "fs-extra";
import * as path from "path";

const singler = "Maroon 5";

const songName = "Sugar";
```

### Check Import

Check import with specified module specifier exist, and its import type.

```bash
lerna exec yarn dev:check-import --scope @ts-morpher/example
```

```typescript
// source-with-import
// pretend this is a required polyfill...
import "typescript";

// source-without-import
const foo = "bar";

// index.ts
import { Project } from "ts-morph";
import path from "path";
import assert from "assert";
import {
  checkImportExistByModuleSpecifier,
  checkImportType,
  checkSourceFileHasImports,
} from "@ts-morpher/checker";
import { getImportDeclarations } from "@ts-morpher/helper";
import { ImportType } from "@ts-morpher/types";

const sourceWithImportFilePath = path.join(
  __dirname,
  "./source-with-import.ts"
);

const sourceWithoutImportFilePath = path.join(
  __dirname,
  "./source-without-import.ts"
);

const p = new Project();
const source1 = p.addSourceFileAtPath(sourceWithImportFilePath);
const source2 = p.addSourceFileAtPath(sourceWithoutImportFilePath);

const i = getImportDeclarations(source1, "typescript");
const type = checkImportType(i);

assert(checkSourceFileHasImports(source1) === true);
assert(checkSourceFileHasImports(source2) === false);
assert(type === ImportType.DIRECTLY_IMPORT);
assert(checkImportExistByModuleSpecifier(source1, "typescript") === true);
```
