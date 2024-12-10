import { nextui } from "@nextui-org/theme";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-blue': '#a8d8ea',
        'pastel-green': '#b8e994',
        'pastel-yellow': '#ffeaa7',
        'pastel-pink': '#ffcccc',
        'pastel-purple': '#d1c4e9',
        'pastel-orange': '#ffd1a9',
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#FFFFFF",
            background: "rgb(255, 255, 255)",
            text: "#000000",
            focus: "#BEF264",
          },
        },
        dark: {
          colors: {
            primary: "#FFFFFF",
            background: "rgb(255, 255, 255)",
            text: "#000000",
            focus: "#BEF264",
          },
        },
      },
    }),
    tailwindcssAnimate,
  ],
};
