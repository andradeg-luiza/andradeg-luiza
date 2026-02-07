/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          wine: "#4E1F28",
          wineMuted: "#66323B",
          beige: "#F3EFE8",
          surface: "#ECE7DF",
        },
        neutralTech: {
          50: "#FAFAF9",
          100: "#F1F1EE",
          200: "#E1E0DC",
          300: "#C9C7C1",
          400: "#AEABA3",
          500: "#918E87",
          600: "#76736D",
          700: "#5A5853",
          800: "#3E3D39",
          900: "#262523",
        },
        success: "#4B6B5A",
        warning: "#8F7A45",
        error: "#6F2D34",
        info: "#5C6A72",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },

      spacing: {
        section: "4.5rem",
        container: "68rem",
        gapSection: "2rem",
        paddingPage: "3rem",
      },

      borderRadius: {
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
      },

      boxShadow: {
        soft: "0 1px 4px rgba(0,0,0,0.025)",
        focus: "0 0 0 2px rgba(78, 31, 40, 0.3)",
      },

      transitionTimingFunction: {
        linearish: "cubic-bezier(0.4, 0, 0.6, 1)",
      },

      transitionDuration: {
        fast: "100ms",
        base: "200ms",
        slow: "300ms",
      },
    },
  },
  plugins: [],
}
