/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '5rem',
        xl: '5.5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      'display': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'textColor': '#000080',
        'background': '#F2F3F4',
      },
    },
  },
  plugins: [],
}

