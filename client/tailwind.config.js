const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Futura", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
