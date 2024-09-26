const defaultTheme = require('tailwindcss/defaultTheme');
const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '12px',
    },
    fontFamily: {
      sans: ['Inter', 'Noto Sans TC', ...defaultTheme.fontFamily.sans],
      mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        body: 'rgb(var(--color-body) / <alpha-value>)',
        primary: 'var(--color-primary)',
        deco: {
          light: 'var(--color-deco-light)',
          dark: 'var(--color-deco-dark)',
        },
        text: {
          light: 'var(--color-text-light)',
          default: 'var(--color-text)',
        },
      },
      zIndex: {
        navbar: '9999',
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
