/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        // 🎯 Paleta Institucional — DACH / Engenharia
        brand: {
          wine: "#4E1F28",        // Bordô técnico fechado
          wineMuted: "#66323B",  // Hover discreto
          beige: "#F3EFE8",      // Fundo técnico
          surface: "#ECE7DF",    // Superfície neutra
        },

        // 🎯 Neutros técnicos (cinzas minerais)
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

        // 🎯 Estados funcionais (não emocionais)
        success: "#4B6B5A",
        warning: "#8F7A45",
        error: "#6F2D34",
        info: "#5C6A72",
      },

      // ✍️ Tipografia técnica
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },

      // 📐 Tokens de espaçamento técnico
      spacing: {
        section: "4.5rem",      // Espaçamento vertical entre seções
        container: "68rem",     // Largura máxima do conteúdo
        gapSection: "2rem",     // Espaçamento interno entre blocos
        paddingPage: "3rem",    // Padding vertical padrão das páginas
      },

      // 🧱 Bordas discretas (técnicas)
      borderRadius: {
        sm: "0.25rem",   // leve, técnico
        md: "0.375rem",  // moderado
        lg: "0.5rem",    // discreto
      },

      // 🪄 Sombras mínimas (funcionais)
      boxShadow: {
        soft: "0 1px 4px rgba(0,0,0,0.025)",      // Sombra quase imperceptível
        focus: "0 0 0 2px rgba(78, 31, 40, 0.3)", // Estado de foco técnico
      },

      // 🎬 Motion funcional e discreto
      transitionTimingFunction: {
        linearish: "cubic-bezier(0.4, 0, 0.6, 1)", // Easing técnico
      },

      transitionDuration: {
        fast: "100ms",  // Mudanças rápidas e funcionais
        base: "200ms",  // Padrão técnico
        slow: "300ms",  // Ainda discreto
      },
    },
  },
  plugins: [],
}
