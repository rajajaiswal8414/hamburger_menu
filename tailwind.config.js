/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        customBg: '#F6F0EB',
        navText: '#492118',
        paraText: '#492118',

      },
    },
  },
  plugins: [],
  corePlugins: {
    scrollBehavior: true, // Enable scroll-smooth
  },
}

