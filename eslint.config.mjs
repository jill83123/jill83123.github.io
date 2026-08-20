import eslintPluginAstro from 'eslint-plugin-astro';
import { importX } from 'eslint-plugin-import-x';

export default [
  ...eslintPluginAstro.configs.recommended,
  importX.flatConfigs.recommended,

  {
    rules: {
      'import-x/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
        },
      ],
      'no-unused-vars': 'warn',
      'import-x/no-named-as-default-member': 'off',
    },
  },
];
