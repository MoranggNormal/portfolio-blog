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
      },
      dropShadow: {
        '3xl': '0px 0px 8px rgb(126, 46, 224, 0.45)',
        '4xl': '0px 0px 1px rgb(126, 46, 224, 0.25)'
      },
      colors: {
        'regal-blue': 'rgb(126, 46, 224, 0.85)',
      }
    },
  },
  plugins: [],
};
export default config;
