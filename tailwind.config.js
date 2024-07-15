/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
      'font-family-all': ['Outfit', 'sans-serif'],
    },
      colors: {
        'color-text-all': 'hsl(215, 51%, 70%)',
        'grad-blue': '#14253D 100%',
        'grad-black': '#0D192B 47.92%',
        'blue-main': '#14253D',
        'hover-blue': '#00FFF6',
        'hover-blue-sec': 'rgba(0, 255, 247, 0.5058823529)',
      },

      maxHeight: {
        'main': '666px',
      },

      boxShadow: {
        'form-shadow': '0px 30px 40px',
      },

      boxShadowColor: {
        'color-shadow': 'rgba(0, 0, 0, 0.4)',
      },

    },
  },
  plugins: [],
}

