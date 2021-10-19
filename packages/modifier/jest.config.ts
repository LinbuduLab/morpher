export default {
  preset: "../../jest.preset.js",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  collectCoverageFrom: ["/src/**/*"],
  moduleFileExtensions: ["ts"],
  globals: { "ts-jest": { tsconfig: "<rootDir>/tsconfig.json" } },
  displayName: "modifier",
};
