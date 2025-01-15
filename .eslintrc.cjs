const rulesDirPlugin = require("eslint-plugin-rulesdir");

rulesDirPlugin.RULES_DIR = "__exclude__";

module.exports = {
  extends: [
    "airbnb",
    "prettier",
    "plugin:@adobe/eslint-plugin-adobe-intl-react/react-intl",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: "./",
  },
  globals: {
    React: true,
    JSX: true,
    Location: true,
    window: true,
    document: true,
    process: true,
    jest: true,
    test: true,
    expect: true,
    screen: true,
    render: true,
    shallow: true,
    mount: true,
  },
  settings: {
    "react": {
      version: "17.0",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        moduleDirectory: ["node_modules", "src/"],
      },
      alias: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        map: [
          ["assets", "./src/assets"],
          ["containers", "./src/containers"],
          ["components", "./src/components"],
          ["context", "./src/context"],
          ["hooks", "./src/hooks"],
          ["state", "./src/state"],
          ["styles", "./src/styles"],
          ["tests", "./src/tests"],
          ["types", "./src/types/index.d.ts"],
          ["utils", "./src/utils"],
          ["utilsMocks", "./src/utilsMocks"],
          ["utilsTests", "./src/utilsTests"],
        ],
      },
    },
  },
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  plugins: [
    "prettier",
    "simple-import-sort",
    "@typescript-eslint/eslint-plugin",
    "import",
    "@adobe/eslint-plugin-adobe-intl-react",
    "disable-autofix",
    "promise",
    "@genstudio/omega",
  ],
  rules: {
    "no-console": ["error"],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "promise/catch-or-return": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "local",
        varsIgnorePattern: "",
      },
    ],
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
    "@adobe/adobe-intl-react/string-is-marked-for-externalization": 2,
    "disable-autofix/@adobe/adobe-intl-react/string-is-marked-for-externalization": 1,
    "@genstudio/omega/require-omega-element": "error",
    "@genstudio/omega/require-omega-widget": "error",
    "@genstudio/omega/require-parent-omega-widget": "warn",
    "@genstudio/omega/require-parent-omega-feature": "warn",
  },
  // Use this section to adjust the lint configuration as desired.
  overrides: [
    {
      files: ["**/*.test.tsx"],
      rules: {
        "@adobe/adobe-intl-react/string-is-marked-for-externalization": 0,
      },
    },
    {
      files: ["*.ts", "*.tsx", "*.js"],
      rules: {
        "no-undef": "off",
        "quotes": [
          2,
          "double",
          {
            avoidEscape: true,
          },
        ],
        "max-len": 0,
        "sort-keys": 0,
        "react/function-component-definition": 0,
        "react/jsx-sort-props": 0,
        "react/react-in-jsx-scope": 0,
        "react/jsx-uses-react": 0,
        "react/require-default-props": 0,
        "react/style-prop-object": 0,
        "import/no-extraneous-dependencies": 0,
        "import/extensions": 0,
        "no-underscore-dangle": 0,
        "no-param-reassign": 0,
        "arrow-body-style": 0,
        "camelcase": 0,
        "no-use-before-define": 0,
        "no-plusplus": 0,
        "prefer-template": 0,
        "consistent-return": 0,
        "global-require": 0,
        "new-cap": [
          2,
          {
            capIsNew: false,
            newIsCap: true,
          },
        ],
        "no-class-assign": 0,
        "no-nested-ternary": 0,
        "no-shadow": 0,
        "import/imports-first": 0,
        "react/jsx-filename-extension": 0,
        "jsx-a11y/html-has-lang": 0,
        "no-confusing-arrow": 0,
        "react/forbid-prop-types": 0,
        "react/no-unused-prop-types": 0,
        "class-methods-use-this": 0,
        "arrow-parens": 0,
        "import/prefer-default-export": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "no-redeclare": 0,
        "import/no-unresolved": [
          2,
          {
            ignore: [
              "@react-types",
              "@genstudio/mfe-*",
              "@wf-mfe/*",
              "@wf-mfe-maestro/*",
              "single-spa-workfront",
            ],
          },
        ],
      },
    },
  ],
};
