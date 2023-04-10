/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: "Poppins, sans-serif",
        korona: '"Krona One", sans-serif',
      },
      colors: {
        dark: "#0C080B",
        green: "#1E3329",
        yellow: "#FFD470",
        "dark-grey": "#B8B8B8",
        "light-grey": "#ECECEC",
        light: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
