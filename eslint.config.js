const { FlatCompat } = require('@eslint/eslintrc')
const ts = require('@typescript-eslint/eslint-plugin')
const tsParser = require('@typescript-eslint/parser')

const compat = new FlatCompat()

const jsConfig = compat.extends('eslint-config-standard')[2]
jsConfig.files = ['**/*.js', '**/*.mjs', '**/*.cjs']

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  {
    ignores: ['dist']
  },
  ...compat.extends('plugin:astro/recommended'),
  jsConfig,
  {
    files: ['src/*.ts'],
    languageOptions: {
      parser: tsParser
    },
    plugins: {
      '@typescript-eslint': ts
    },
    rules: {
      ...ts.configs.recommended.rules
    }
  }
]
