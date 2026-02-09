// 1. Anti-flash: roda imediatamente
(function () {
  const saved = localStorage.getItem("theme")
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  const shouldBeDark = saved === "dark" || (!saved && prefersDark)

  if (shouldBeDark) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
})()

// 2. Função global para trocar tema
function setTheme(mode) {
  const html = document.documentElement

  if (mode === "dark") {
    html.classList.add("dark")
    localStorage.setItem("theme", "dark")
  } else {
    html.classList.remove("dark")
    localStorage.setItem("theme", "light")
  }
}

// 3. Inicialização (roda depois do load)
function initTheme() {
  const saved = localStorage.getItem("theme")

  if (saved) {
    setTheme(saved)
    return
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  setTheme(prefersDark ? "dark" : "light")
}

if (typeof window !== "undefined") {
  initTheme()
  window.setTheme = setTheme
}
