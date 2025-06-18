/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60a5fa', // blue-400
          DEFAULT: '#2563eb', // blue-600
          dark: '#1e40af', // blue-800
        },
        secondary: {
          light: '#f472b6', // pink-400
          DEFAULT: '#ec4899', // pink-500
          dark: '#be185d', // pink-800
        },
      },
    },
  },
  plugins: [],
};
