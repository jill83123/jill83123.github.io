import globals from 'globals';

import eslintJS from '@eslint/js';
import eslintTS from 'typescript-eslint';

import astroPlugin from 'eslint-plugin-astro';
import vuePlugin from 'eslint-plugin-vue';
import a11yPlugin from 'eslint-plugin-jsx-a11y';

export default [
  eslintJS.configs.recommended,
  ...astroPlugin.configs.recommended,
  ...vuePlugin.configs['flat/recommended'],
  a11yPlugin.flatConfigs.recommended,

  {
    files: ['**/*.{js,mjs,cjs,ts,vue,astro}'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },

  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: eslintTS.parser,
      },
    },
  },

  {
    // Define the configuration for `<script>` tag.
    // Script in `<script>` is assigned a virtual file name with the `.js` extension.
    files: ['**/*.{ts,tsx}', '**/*.astro/*.js'],
    languageOptions: {
      parser: eslintTS.parser,
    },
  },

  {
    ignores: ['dist', 'node_modules', '.github', 'types.generated.d.ts', '.astro'],
  },
];
