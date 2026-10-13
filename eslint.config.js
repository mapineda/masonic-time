// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const eslintConfigPrettier = require('eslint-config-prettier');
const globals = require('globals');

module.exports = tseslint.config(
  {
    ignores: ['dist/**'],
  },
  eslint.configs.recommended,
  {
    files: ['**/*.ts'],
    extends: [...tseslint.configs.recommended],
  },
  eslintConfigPrettier,
  {
    files: ['*.config.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node,
    },
  },
);
