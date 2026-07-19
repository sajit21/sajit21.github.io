const { FlatCompat } = require("@eslint/eslintrc");

module.exports = [
  {
    ignores: ["node_modules/", ".next/", "out/"],
  },
  {
    extends: ["next/core-web-vitals"],
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
    },
  },
];
