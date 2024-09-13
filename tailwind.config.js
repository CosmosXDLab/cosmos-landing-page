/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',  // Color blanco
        purple_oscuro: '#593F62',  // Color púrpura oscuro
        red_oscuro: '#36151E', // Color rojo oscuro
        purple_claro: '#7B6D8D',    // Color púrpura claro
        purple_fosforesente: '#5F2DEE',
        gris: '#6C6A72',
        w: '#F4F2F9',
        black_m: '#1D1729'

      },
      fontFamily: {
        cortana: ['Catamaran', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}

