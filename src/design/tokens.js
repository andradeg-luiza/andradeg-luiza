import palette from "./palette.js"
import typography from "./typography.js"
import spacing from "./spacing.js"
import shadows from "./shadows.js"

export default {
  colors: palette,        // Paleta institucional (brand, neutralTech, states)
  fontFamily: typography, // Tipografia técnica (sans + mono)
  spacing,                // Tokens de espaçamento técnico
  shadows,                // Sombras mínimas e funcionais
}
