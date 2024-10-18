/** @type {import('tailwindcss').Config} */
export default {
  content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(203, 0, 4)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
