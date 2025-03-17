import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Colores personalizados para Bizflow
        "bizflow-blue": {
          50: "#edf2fc",
          100: "#d4e0f7",
          200: "#a7c3ef",
          300: "#729de4",
          400: "#4c7bd8",
          500: "#2f5bca",
          600: "#2247a9",
          700: "#1b3687",
          800: "#172a6c",
          900: "#14245a",
          950: "#0c1633",
        },
        "bizflow-gray": {
          50: "#f6f7f9",
          100: "#eceff2",
          200: "#d5dce3",
          300: "#b2bfcc",
          400: "#899cb0",
          500: "#6a8097",
          600: "#54687d",
          700: "#455467",
          800: "#3b4756",
          900: "#343c49",
          950: "#22272f",
        },
        "bizflow-purple": {
          50: "#f5f2ff",
          100: "#ede6ff",
          200: "#dcd0ff",
          300: "#c4acff",
          400: "#aa7dff",
          500: "#9147ff",
          600: "#802cf7",
          700: "#7022dd",
          800: "#5c1eb8",
          900: "#4d1c97",
          950: "#2d1066",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
