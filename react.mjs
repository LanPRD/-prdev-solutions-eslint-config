import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import promisePlugin from "eslint-plugin-promise";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "dist",
      ".eslintrc.cjs",
      ".eslintrc.js",
      "node_modules",
      "settings*",
      "**/constants.*",
      "**/settings.*",
      "**/config.*",
      "*.config.*",
      "**/schema.ts"
    ]
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaVersion: "latest",
      globals: globals.browser
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "jsx-a11y": jsxA11y,
      "react-hooks": reactHooks,
      import: importPlugin,
      promise: promisePlugin,
      prettier: prettierPlugin
    },
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      ...promisePlugin.configs.recommended.rules,

      // Regras personalizadas que você tinha antes
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_"
        }
      ],
      "@typescript-eslint/no-use-before-define": ["error"],
      "prettier/prettier": [
        "error",
        {
          trailingComma: "none",
          tabWidth: 2,
          semi: true,
          singleQuote: false,
          arrowParens: "avoid",
          bracketSpacing: true,
          endOfLine: "lf",
          proseWrap: "never",
          printWidth: 120
        }
      ],
      complexity: ["error", 5],
      "max-depth": ["error", 3],
      "no-magic-numbers": [
        "error",
        {
          ignore: [0, 1, -1],
          ignoreArrayIndexes: true,
          ignoreDefaultValues: true,
          enforceConst: true,
          detectObjects: false,
          ignoreClassFieldInitialValues: true
        }
      ],
      camelcase: "error",
      eqeqeq: ["error", "always"],
      "prefer-const": "error",
      "no-else-return": "error",
      "no-fallthrough": "error",
      "array-callback-return": "error",
      "import/no-named-as-default": "off"
    },

    settings: {
      "import/resolver": {
        typescript: true,
        node: true
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"]
      }
    }
  }
);