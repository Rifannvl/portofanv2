/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) border-box, linear-gradient(0deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) border-box",
      },
      backgroundSize: {
        grid: "10px 10px", // Ukuran kotak dalam grid
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      animation: {
        "move-border": "moveBorder 4s linear infinite",
      },
      keyframes: {
        moveBorder: {
          "0%": {
            borderTopColor: "rgba(0, 0, 255, 0.7)", // Blue color
            borderRightColor: "rgba(0, 0, 255, 0.7)",
            borderBottomColor: "rgba(0, 0, 255, 0.7)",
            borderLeftColor: "rgba(0, 0, 255, 0.7)",
          },
          "25%": {
            borderTopColor: "rgba(0, 0, 255, 0)",
            borderRightColor: "rgba(0, 0, 255, 0.7)",
            borderBottomColor: "rgba(0, 0, 255, 0)",
            borderLeftColor: "rgba(0, 0, 255, 0)",
          },
          "50%": {
            borderTopColor: "rgba(0, 0, 255, 0)",
            borderRightColor: "rgba(0, 0, 255, 0)",
            borderBottomColor: "rgba(0, 0, 255, 0.7)",
            borderLeftColor: "rgba(0, 0, 255, 0)",
          },
          "75%": {
            borderTopColor: "rgba(0, 0, 255, 0)",
            borderRightColor: "rgba(0, 0, 255, 0)",
            borderBottomColor: "rgba(0, 0, 255, 0)",
            borderLeftColor: "rgba(0, 0, 255, 0.7)",
          },
          "100%": {
            borderTopColor: "rgba(0, 0, 255, 0.7)", // Blue color
            borderRightColor: "rgba(0, 0, 255, 0)",
            borderBottomColor: "rgba(0, 0, 255, 0)",
            borderLeftColor: "rgba(0, 0, 255, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
