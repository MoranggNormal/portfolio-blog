import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(at right top, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39))',
      },
      textColor: {
        'primary': 'pink',
        'secondary': 'pink',
        'danger': 'pink',
      }
    },
  },
  plugins: [],
};
export default config;
