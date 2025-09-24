/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Habilito el modo oscuro basado en una clase en el HTML
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'sans-serif'],
      },
      colors: {
        rubika: {
          'orange': '#E65100',
          'yellow': '#FFCA28',
          'dark-yellow': '#FFA000',
          'red': '#D32F2F',
          'blue': '#1976D2',
          'green': '#388E3C',
        }
      },
      borderRadius: {
        '2xl': '1rem', // El prompt pide 2xl, que es 1rem por defecto, pero lo defino para claridad
      }
    },
  },
  plugins: [],
}
