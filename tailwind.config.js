/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heebo: ["Heebo"],
        montserrat: ["Montserrat"],
      },
      typography: {
        DEFAULT: {
          css: {
            "@layer base": {
              "font-synthesis": "none",
              "text-rendering": "optimizeLegibility",
              "-webkit-font-smoothing": "antialiased",
              "-moz-osx-font-smoothing": "grayscale",
            },
          },
        },
      },
      maxWidth: {
        1400: "87.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
