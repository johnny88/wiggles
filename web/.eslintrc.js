module.exports = {
  env: { node: true, es2020: true },
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "no-unused-vars": [
      "warning",
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warning",
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
    ],
  },
};
