/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["KalamehWeb"],
      },
      colors: {
        "english-violet": "#473948ff",
        "old-rose": "#B17D7Aff",
        "mountbatten-pink": "#8A6876ff",
        "english-violet-2": "rgba(72, 71, 102,0.6)",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
