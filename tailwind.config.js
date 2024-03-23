/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "middle-grey": "#979797",
        pink: "#F4007A",
        "light-pink": "#FFCCCC",
      },
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
      fontSize: {
        "5xl": "3.125rem",
      },
      letterSpacing: {
        widest: ".5625rem",
        wider: ".375rem",
      },
      lineHeight: {
        18: "1.125rem",
      },
      maxWidth: {
        1400: "87.5rem",
      },
      minWidth: {
        500: "31.25rem",
        426: "26.625rem",
        389: "24.3125rem",
      },
      minHeight: {
        417: "26.0625rem",
        337: "21.0625rem",
        289: "18.0625rem",
        214: "13.375rem",
      },
      padding: {
        66: "4.125rem",
        39: "2.4375rem",
        20: "1.25rem",
        13: ".8125rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
