/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // HANDMADE CUSTOMIZATION
    extend: {
      transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
        3000: "3000ms",
      },

      screens: {
        sm: "550px",
        md: "800px",
        lg: "1200px",
        xl: "1440px",
      },
    },
  },
  plugins: [],

  // HANDMADE CUSTOMIZATION
  darkMode: "class",
};
