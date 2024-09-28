import globals from "globals";
import pluginVue from "eslint-plugin-vue";

import ts from "@typescript-eslint/parser";
import vue from "vue-eslint-parser";

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  ...pluginVue.configs["flat/recommended"],
  {
    languageOptions: {
      parser: vue,
      parserOptions: {
        parser: ts,
        project: "./tsconfig.json",
        extraFileExtensions: [".vue"],
      },
    },
    rules: {
      semi: ["error", "always"],
      "vue/multi-word-component-names": 0,
      "vue/singleline-html-element-content-newline": 0,
      "vue/html-self-closing": 0,
      "vue/max-attributes-per-line": [
        "warning",
        {
          singleline: {
            max: 5,
          },
          multiline: {
            max: 3,
          },
        },
      ],
    },
  },
];
