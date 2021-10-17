export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["json", "text", "lcov", "clover"],
  maxWorkers: "80%",
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["js", "ts"],
  projects: [
    "<rootDir>/packages/checker",
    "<rootDir>/packages/creator",
    // "<rootDir>/packages/cleaner",
    // "<rootDir>/packages/modifier",
    "<rootDir>/packages/helper",
  ],
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  roots: ["<rootDir>"],
  runner: "jest-runner",
  testEnvironment: "jest-environment-node",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/"],
  verbose: true,
};
