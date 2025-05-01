import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
      fontFamily: {
        sans: ["var(--font-lato)", "system-ui", "sans-serif"],
        heading: ["var(--font-lato)", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Times Black colors
        primary: {
          DEFAULT: "#D4AF37", // Gold
          foreground: "#000000",
          50: "#FBF6E5",
          100: "#F7EDCC",
          200: "#EFDB99",
          300: "#E7C966",
          400: "#DFB733",
          500: "#D4AF37", // Gold
          600: "#A98C2C",
          700: "#7F6921",
          800: "#544616",
          900: "#2A230B",
        },
        secondary: {
          DEFAULT: "#B38728", // Darker gold
          foreground: "#FFFFFF",
          50: "#F9F4E6",
          100: "#F3E9CD",
          200: "#E7D39B",
          300: "#DBBD69",
          400: "#CFA737",
          500: "#B38728",
          600: "#8F6C20",
          700: "#6B5118",
          800: "#473610",
          900: "#231B08",
        },
        accent: {
          DEFAULT: "#E5C100", // Bright gold
          foreground: "#000000",
          50: "#FEFBE5",
          100: "#FDF7CC",
          200: "#FBEF99",
          300: "#F9E766",
          400: "#F7DF33",
          500: "#E5C100",
          600: "#B79A00",
          700: "#897300",
          800: "#5C4D00",
          900: "#2E2600",
        },
        times: {
          gold: "#D4AF37",
          bronze: "#CD7F32",
        },
        muted: {
          DEFAULT: "#1A1A1A", // Dark gray
          foreground: "#A0A0A0", // Light gray
        },
        destructive: {
          DEFAULT: "#FF4545", // Red
          foreground: "#FFFFFF",
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
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        times: "0 0 0 1px rgba(212, 175, 55, 0.1), 0 4px 12px 0 rgba(0,0,0,.3)",
        "times-sm": "0 0 0 1px rgba(212, 175, 55, 0.1), 0 1px 3px 0 rgba(0,0,0,.2)",
        "times-md": "0 0 0 1px rgba(212, 175, 55, 0.1), 0 4px 8px 0 rgba(0,0,0,.2)",
        "times-lg": "0 0 0 1px rgba(212, 175, 55, 0.1), 0 8px 24px 0 rgba(0,0,0,.3)",
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
