/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "90%": [{ transform: "translateX(5%)" }],
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideout: {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "10%": { transform: "translateX(5%)" },
          "100%": { transform: "translateX(-200%)", opacity: 0 },
        },
      },
      animation: {
        slidein: "slidein 0.5s ease-in-out forwards",
        slideout: "slideout 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
