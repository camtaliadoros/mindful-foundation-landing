import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mf-blue': '#26224F',
        'mf-green': '#30F6BA',
        ash: '#232426',
        chalk: '#FAFAFA',
      },
      keyframes: {
        'text-animation': {
          '0%': { 'margin-top': '0' },
          '10%': { 'margin-top': '0' },
          '20%': { 'margin-top': '-6rem' },
          '30%': { 'margin-top': '-6rem' },
          '40%': { 'margin-top': '-12rem' },
          '60%': { 'margin-top': '-12rem' },
          '70%': { 'margin-top': '-6rem' },
          '80%': { 'margin-top': '-6rem' },
          '90%': { 'margin-top': '0' },
          '100%': { 'margin-top': '0' },
        },
        'text-animation-mobile': {
          '0%': { 'margin-top': '0' },
          '10%': { 'margin-top': '0' },
          '20%': { 'margin-top': '-4rem' },
          '30%': { 'margin-top': '-4rem' },
          '40%': { 'margin-top': '-8rem' },
          '60%': { 'margin-top': '-8rem' },
          '70%': { 'margin-top': '-4rem' },
          '80%': { 'margin-top': '-4rem' },
          '90%': { 'margin-top': '0' },
          '100%': { 'margin-top': '0' },
        },
      },
      animation: {
        'text-animation': 'text-animation 8s infinite',
        'text-animation-mobile': 'text-animation 8s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
