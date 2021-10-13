module.exports = {
  types: [
    {
      value: "init",
      name: "initial commit",
      emoji: "🎉",
    },
    {
      value: "feat",
      name: "add features",
      emoji: "✨",
    },
    {
      value: "workspace",
      name: "workspace configuration",
      emoji: "🏗️",
    },
    {
      value: "docs",
      name: "update documentation",
      emoji: "📝",
    },
    {
      value: "scripts",
      name: "workspace scripts",
      emoji: "🛠️",
    },
    {
      value: "docs",
      name: "docs site enhancement",
      emoji: "📝",
    },
    {
      value: "typo",
      name: "fix documentation typo",
      emoji: "✏️",
    },
    {
      value: "chore",
      name: "related works",
      emoji: "🏗️",
    },
    {
      value: "example",
      name: "update examples",
      emoji: "🎬",
    },
    {
      value: "fix",
      name: "bug fixtures",
      emoji: "🐛",
    },
    {
      value: "perf",
      name: "performance optimization",
      emoji: "⚡",
    },
    {
      value: "ci",
      name: "add CI build",
      emoji: "👷",
    },
    {
      value: "fix-ci",
      name: "fix CI build",
      emoji: "💚",
    },
    {
      value: "test",
      name: "add test cases",
      emoji: "✅",
    },
    {
      value: "refactor",
      name: "code refactor",
      emoji: "🔨",
    },
    {
      value: "clean",
      name: "clean file",
      emoji: "🔥",
    },
    {
      value: "lint",
      name: "code lint",
      emoji: "🎨",
    },
    {
      value: "i18n",
      name: "i18n",
      emoji: "🌐",
    },
    {
      value: "upgrade-deps",
      name: "upgrade deps",
      emoji: "⬆️",
    },
    {
      value: "release",
      name: "release project",
      emoji: "🔖",
    },
  ],
  scopes: [
    "checker",
    "cleaner",
    "helper",
    "creator",
    "modifier",
    "types",
    "workspace",
  ],
  disableEmoji: false,
  maxMessageLength: 164,
  minMessageLength: 3,
  questions: ["type", "scope", "subject", "breaking", "body", "issues"],
  messages: {
    type: "Select the type of change that you're committing:",
    scope: "\nDenote the SCOPE of this change (optional):",
    // used if allowCustomScopes is true
    customScope: "Denote the SCOPE of this change:",
    subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
    body:
      'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: "List any BREAKING CHANGES (optional):\n",
    footer:
      "List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n",
    confirmCommit: "Are you sure you want to proceed with the commit above?",
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  footerPrefix: "ISSUES CLOSED:",
};
