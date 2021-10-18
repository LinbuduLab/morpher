import * as pathHelper from "path";
import fs from "fs";
import { transpileModule } from "typescript";
import { spawn, spawnSync, execFileSync } from "child_process";
