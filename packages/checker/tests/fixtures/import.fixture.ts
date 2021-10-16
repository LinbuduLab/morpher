import * as pathHelper from "path";
import fs from "fs";
import { transpileModule } from "typescript";
import cp, { spawnSync } from "child_process";
import type { BlobOptions } from "buffer";
import type { CompilerOptions } from "typescript";
