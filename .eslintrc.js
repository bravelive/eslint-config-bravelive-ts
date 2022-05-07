// For more information on rules: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/README.md

module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  "plugins": [
    "@typescript-eslint",
  ],
  "rules": {
    "quotes": "off",
    "@typescript-eslint/quotes": ["error", "double", { "allowTemplateLiterals": true }],
    "@typescript-eslint/ban-ts-comment": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": ["error", "always", { "exceptAfterOverload": false }],
    "@typescript-eslint/no-explicit-any": "error",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      { 
        "selector": "variableLike", 
        "format": ["camelCase"] 
      }
    ],
    "brace-style": "off",
    "@typescript-eslint/brace-style": "error"
  }
};