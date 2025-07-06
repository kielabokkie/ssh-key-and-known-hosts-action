import js from '@eslint/js';
import babelParser from '@babel/eslint-parser';

export default [
  {
    ignores: [
      'dist/**',
      '*.mjs',
      'node_modules/'
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
      },
      globals: {
        // Node.js globals
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        // ES2020 globals
        BigInt: 'readonly',
        globalThis: 'readonly',
        // ES2021 globals
        AggregateError: 'readonly',
        FinalizationRegistry: 'readonly',
        WeakRef: 'readonly',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': ['error', { args: 'none' }],
      'no-useless-escape': 'off',
      'no-empty': 'off',
    },
  },
];
