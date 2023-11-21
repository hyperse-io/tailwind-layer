// Workaround for https://github.com/eslint/eslint/issues/3458 (re-export of @rushstack/eslint-patch)
require('@armit/eslint-config-bases/patch/modern-module-resolution');

const {
  getDefaultIgnorePatterns,
} = require('@armit/eslint-config-bases/helpers');

module.exports = {
  root: true,
  ignorePatterns: [...getDefaultIgnorePatterns()],
  extends: [
    '@armit/eslint-config-bases/typescript',
    '@armit/eslint-config-bases/sonar',
    '@armit/eslint-config-bases/regexp',
    '@armit/eslint-config-bases/vitest',
    // Apply prettier and disable incompatible rules
    '@armit/eslint-config-bases/prettier',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  rules: {
    '@typescript-eslint/naming-convention': 'off',
  },
  overrides: [],
};
