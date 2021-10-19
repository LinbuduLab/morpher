import execa from "execa";
import fs from "fs-extra";
import path from "path";

interface IPackageDocItem {
  entryPoints: string;
  tsconfig: string;
  out: string;
}

async function main() {
  const packageDocInfoList: IPackageDocItem[] = [];
  const packageList = fs.readdirSync(path.resolve(__dirname, "../packages"));
  const commandList = [];

  for (const pkg of packageList) {
    packageDocInfoList.push({
      entryPoints: `packages/${pkg}/src`,
      tsconfig: `packages/${pkg}/tsconfig.json`,
      out: `docs/${pkg}-docs`,
    });
  }

  for (const docInfo of packageDocInfoList) {
    commandList.push(
      `typedoc --entryPointStrategy expand --entryPoints ${docInfo.entryPoints} --tsconfig ${docInfo.tsconfig} --out ${docInfo.out} --readme none --excludeNotDocumented`
    );
  }

  for (const command of commandList) {
    try {
      await execa(command, {
        stdio: "inherit",
        shell: true,
        preferLocal: true,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  }

  // Postprocess
}

(async () => {
  await main();
})();
