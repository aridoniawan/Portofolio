/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0284c7",
        secondary: "#64748b",
        dark: "#1e293b",
        white: "#f5f5f5",
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.5)",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-shadow": {
            textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
          },
          ".text-shadow-lg": {
            textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
          },
          // Tambahkan lebih banyak jika diperlukan
        },
        ["responsive", "hover"]
      );
    },
  ],
};
