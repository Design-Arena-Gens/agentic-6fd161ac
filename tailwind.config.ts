import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        kling: {
          50: '#f3f6ff',
          100: '#dee8ff',
          200: '#b7d0ff',
          300: '#85acff',
          400: '#5983ff',
          500: '#355dff',
          600: '#1b3af5',
          700: '#1229d1',
          800: '#14239f',
          900: '#131f75'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(53, 93, 255, 0.35)'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
};

export default config;
