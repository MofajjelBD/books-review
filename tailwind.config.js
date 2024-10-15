/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // // Custom colors here
        Primary: {
          light: "#06b6d4",
          DEFAULT: "#131313",
          dark: "#a6adbb",
        },
        // Primary: "#0c0a09",
        "brand-red": "#dc2626",
        "custom-green": {
          light: "#6ee7b7",
          DEFAULT: "#10b981",
          dark: "#065f46",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
