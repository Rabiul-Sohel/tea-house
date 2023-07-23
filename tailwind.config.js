/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./*.html",
      "./public/**/*.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            vuejs: {
               100: "#34ebb7",
               900: "#b51b9b",
            },
         },
      },
   },
   plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/container-queries"),
      require("@tailwindcss/forms"),
      require("@tailwindcss/aspect-ratio"),
   ],
};