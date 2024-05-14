module.exports = {
  root: true,
  env: { browser: true, es6: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-plugin-qwik/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
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
