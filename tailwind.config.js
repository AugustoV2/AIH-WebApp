import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    light: {},
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
 
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#FFFFFF", // Set primary color to white
            background: "rgb(255, 255, 255)", // Set background to white
            text: "#000000", // Set text color to black for better contrast
            focus: "#BEF264", // Highlight color for focused elements (optional)
          },
        },
        dark: {
          colors: {
            primary: "#FFFFFF", // Set primary color to white
            background: "rgb(255, 255, 255)", // Set background to white for dark mode (if desired)
            text: "#000000", // Set text color to black
            focus: "#BEF264", // Highlight color for focused elements (optional)
          },
        },
      },
    }),
  ]
  

}
