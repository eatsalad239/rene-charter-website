/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#e6f7ff',
          100: '#b3e5ff',
          200: '#80d4ff',
          300: '#4dc2ff',
          400: '#1ab0ff',
          500: '#0096e6',
          600: '#0075b3',
          700: '#005480',
          800: '#00334d',
          900: '#00121a',
        },
        sunset: {
          50: '#fff5e6',
          100: '#ffe0b3',
          200: '#ffcb80',
          300: '#ffb64d',
          400: '#ffa11a',
          500: '#e68a00',
          600: '#b36b00',
          700: '#804d00',
          800: '#4d2e00',
          900: '#1a0f00',
        },
      },
    },
  },
  plugins: [],
}
