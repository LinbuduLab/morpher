import fs from "fs-extra";
import * as path from "path";
import { exec, execSync, spawn, spawnSync } from "child_process";
import ts, { transpileModule, CompilerOptions, factory } from "typescript";
import type { SourceFile, VariableDeclarationKind } from "ts-morph";
