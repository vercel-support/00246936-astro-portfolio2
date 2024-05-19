module.exports = {
  root: true,
  env: { browser: true, es6: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-plugin-qwik/recommended',
  ],
  rules: {
    'no-confusing-arrow': ['error', { arrowParens: false }],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', '@stylistic'],
  ignorePatterns: [
    'dist/',
    'node_modules/',
    'db/**/*',
    'public/**/*',
    '**/scripts/**/*',
    'test/**/*',
    'src/env.d.ts',
  ],
}
