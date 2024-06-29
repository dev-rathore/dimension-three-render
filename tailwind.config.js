/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0B3142',
        'secondary': '#D3F6DB',
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
}

