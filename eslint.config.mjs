import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'public/**',
      '*.config.js',
      '*.config.mjs',
      'playwright-report/**',
    ],
  },
  {
    rules: {
      // Allow unused vars starting with underscore (args, variables, and caught errors)
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }],
      // Allow any type (can be strict later)
      '@typescript-eslint/no-explicit-any': 'warn',
      // Allow empty functions
      '@typescript-eslint/no-empty-function': 'off',
      // Allow non-null assertions
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  }
);
