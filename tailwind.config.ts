import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lilac-light': '#C9A7E8',
        lilac: '#9B6FCE',
        'lilac-dark': '#6B3FA0',
        teal: {
          DEFAULT: '#2DD4BF',
          dark: '#14B8A6',
          light: '#5EEAD4',
        },
        neutral: {
          900: '#1F1B24',
          800: '#2D2735',
          700: '#433A4F',
          100: '#F5F3F8',
          50: '#FAF9FC',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(107, 63, 160, 0.25)',
        glow: '0 0 25px rgba(45, 212, 191, 0.4)',
        card: '0 15px 35px -5px rgba(31, 27, 36, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
