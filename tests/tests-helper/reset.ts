import fs from "fs-extra";
import path from "path";

export function resetBaseFixture() {
  const source = path.resolve(__dirname, "../fixtures/base-source.ts");
  const currentSource = path.resolve(__dirname, "../fixtures/base.ts");

  fs.writeFileSync(currentSource, fs.readFileSync(source, "utf-8"));
}
