module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        entrance: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        entrance: "entrance 1s ease-in-out",
      },
    },
    colors: {
      "d-blue-1": "#103B49",
      "d-blue-2": "#0B2027",
      "d-blue-3": "#40798C",
      "avatar-grey": "#4F646F",
      white: "#ffffff",
    },
  },
  plugins: [],
};
