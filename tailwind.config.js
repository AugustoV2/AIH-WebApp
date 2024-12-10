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
    // ... rest of your existing theme configuration ...
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