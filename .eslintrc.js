module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:eslint-comments/recommended",
    "plugin:react/recommended",
    "plugin:promise/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "@typescript-eslint",
    "eslint-comments",
    "react",
    "promise",
    "import",
    "prettier",
  ],
  rules: {
    "react/jsx-filename-extension": [0],
    "no-console": "warn",
    "no-unused-vars": "warn",
    "prettier/prettier": "error",
    "import/no-unresolved": "error",
    "import/no-default-export": "error",
    "import/no-cycle": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
        jsx: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    react: {
      version: "latest",
    },
    "import/resolver": {
      node: {
        paths: ["./"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
