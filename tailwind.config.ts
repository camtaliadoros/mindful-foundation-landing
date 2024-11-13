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
    },
  },
  plugins: [],
};
export default config;
