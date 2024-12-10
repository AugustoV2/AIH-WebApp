import { nextui } from "@nextui-org/theme";

export default {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    light: {},
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "pastel-blue": "#a8d8ea",
        "pastel-green": "#b8e994",
        "pastel-yellow": "#ffeaa7",
        "pastel-pink": "#ffcccc",
        "pastel-purple": "#d1c4e9",
        "pastel-orange": "#ffd1a9",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
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
    require("tailwindcss-animate"),
  ],
};
