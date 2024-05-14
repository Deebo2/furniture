/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  presets: [
    require('./my-preset')
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Montserrat, sans-serif',
      },
  },
}
}

