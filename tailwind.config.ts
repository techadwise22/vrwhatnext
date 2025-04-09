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
        // Slack colors
        primary: {
          DEFAULT: "#4A154B", // Slack purple
          foreground: "#FFFFFF",
          50: "#F4EBF4",
          100: "#E9D7EA",
          200: "#D3AFD5",
          300: "#BD87BF",
          400: "#A75FAA",
          500: "#4A154B",
          600: "#3B1039",
          700: "#2C0C2B",
          800: "#1E081D",
          900: "#0F040E",
        },
        secondary: {
          DEFAULT: "#2BAC76", // Slack green
          foreground: "#FFFFFF",
          50: "#EEFBF5",
          100: "#DCF7EB",
          200: "#B9EFD7",
          300: "#97E7C3",
          400: "#74DFAF",
          500: "#2BAC76",
          600: "#228A5E",
          700: "#1A6747",
          800: "#11452F",
          900: "#092218",
        },
        accent: {
          DEFAULT: "#1264A3", // Slack blue
          foreground: "#FFFFFF",
          50: "#E9F2F9",
          100: "#D3E5F3",
          200: "#A7CBE7",
          300: "#7BB1DB",
          400: "#4F97CF",
          500: "#1264A3",
          600: "#0E5082",
          700: "#0B3C62",
          800: "#072841",
          900: "#041421",
        },
        slack: {
          red: "#E01E5A",
          yellow: "#ECB22E",
        },
        muted: {
          DEFAULT: "#F8F8F8", // Slack light gray
          foreground: "#616061", // Slack text gray
        },
        destructive: {
          DEFAULT: "#E01E5A", // Slack red
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
        slack: "0 0 0 1px rgba(0,0,0,.1), 0 4px 12px 0 rgba(0,0,0,.12)",
        "slack-sm": "0 0 0 1px rgba(0,0,0,.1), 0 1px 3px 0 rgba(0,0,0,.08)",
        "slack-md": "0 0 0 1px rgba(0,0,0,.1), 0 4px 8px 0 rgba(0,0,0,.1)",
        "slack-lg": "0 0 0 1px rgba(0,0,0,.1), 0 8px 24px 0 rgba(0,0,0,.2)",
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
