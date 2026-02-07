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
