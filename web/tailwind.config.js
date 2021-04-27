const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: "class",
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        display: ["Orelega One", "cursive"],
      },
      colors: {
        gray: colors.trueGray,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
