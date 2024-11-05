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
        'mf-blue': '#25234B',
        'mf-green': '#79F1C0',
        ash: '#232426',
        chalk: '#F8F9FA',
      },
    },
  },
  plugins: [],
};
export default config;
