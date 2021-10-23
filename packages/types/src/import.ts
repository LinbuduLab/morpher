/**
 * @enum Import declaration type
 */
export enum ImportType {
  /**
   * e.g. import * as fs from "fs";
   */
  NAMESPACE_IMPORT = "NAMESPACE_IMPORT",
  /**
   * e.g. import { exec } from "child_process";
   */
  NAMED_IMPORT = "NAMED_IMPORT",
  /**
   * e.g. import path from "path"；
   */
  DEFAULT_IMPORT = "DEFAULT_IMPORT",
  /**
   * e.g. import ts, { transpileModule } from "typescript";
   */
  DEFAULT_WITH_NAMED_IMPORT = "DEFAULT_WITH_NAMED_IMPORT",
  /**
   * e.g. import "ui-library/dist/index.css"
   */
  DIRECTLY_IMPORT = "DIRECTLY_IMPORT",
}
