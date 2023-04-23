const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat()

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  {
    ignores: ['dist']
  },
  ...compat.extends('eslint-config-standard')
]
