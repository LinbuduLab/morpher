export default {
  preset: "../../jest.preset.js",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  collectCoverageFrom: ["/src/**/*"],
  moduleFileExtensions: ["ts", "js"],
  globals: { "ts-jest": { tsconfig: "<rootDir>/tsconfig.json" } },
  displayName: "cleaner",
};
