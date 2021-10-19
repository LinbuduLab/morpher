const { HTMLTheme } = require("fliegdoc");
const fs = require("fs-extra");
const path = require("path");

const getModuleList = () => {
  const moduleList = [];
  const packageList = fs.readdirSync(path.resolve(__dirname, "packages"));

  for (const package of packageList) {
    moduleList.push({
      package: `./packages/${package}/package.json`,
      tsconfig: `./packages/${package}/tsconfig.json`,
      mainFile: `./packages/${package}/src/index.ts`,
    });
  }

  return moduleList;
};

module.exports = {
  baseUrl: "/",
  outDir: "./docs",
  readme: "./README.md",
  modules: getModuleList(),
  title: "TSMorpher", // appears in the page title and header
  externalLinks: {
    GitHub: "https://github.com/fliegwerk/fliegdoc",
  },
  hidePrivateMembers: true,
  theme: HTMLTheme,
};
