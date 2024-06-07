import type { Config } from 'tailwindcss';

const withMT = require('@material-tailwind/react/utils/withMT');
// const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    '@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {},
    extend: {},
  },
  plugins: [],
};
export default withMT(config);
