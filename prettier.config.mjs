/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',

  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss', // needs to be last
  ],

  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro' },
    },
  ],
};
