const ERROR = "error";
const OFF = "off";
const WARN = "warn";

/** @type { import('eslint').Linter.Config } */
const config = {
  parser: "@typescript-eslint/parser",
  env: { browser: true, node: true, es2021: true },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
    },
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": OFF,
    "import/extensions": [WARN, "never"],
    "import/prefer-default-export": OFF,
    "react/jsx-filename-extension": [ERROR, { extensions: [".tsx"] }],
    "react/jsx-props-no-spreading": OFF,
    "react/prop-types": OFF,
    "react/react-in-jsx-scope": OFF,
    "react/require-default-props": OFF,
  },
};

module.exports = config;
