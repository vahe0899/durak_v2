module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["eslint-plugin-import-helpers", "prettier", "react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import-helpers/order-imports": [
      "error",
      {
        groups: [
          ["/^react$/", "/^react/.+$/"],
          ["/^next$/", "/^next/.+$/"],
          "module",
          "/^~/processes/",
          "/^~/widgets/",
          "/^~/features/",
          "/^~/entities/",
          "/^~/shared/",
          ["parent", "sibling", "index"],
        ],
        newlinesBetween: "always",
        alphabetize: {
          order: "asc",
          ignoreCase: true,
        },
      },
    ],
  },
};
