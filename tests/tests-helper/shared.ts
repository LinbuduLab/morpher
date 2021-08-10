import fs from "fs-extra";
import path from "path";
import prettier from "prettier";

export const baseFilePath = path.resolve(__dirname, "../fixtures/base.ts");

export const readFileSync = (file: string) =>
  prettier.format(fs.readFileSync(file, "utf-8"), {
    parser: "typescript",
    singleQuote: true,
  });
