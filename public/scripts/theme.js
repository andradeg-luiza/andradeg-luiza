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

function loadTheme() {
  const saved = localStorage.getItem("theme")
  if (saved === "dark") {
    document.documentElement.classList.add("dark")
  }
}

loadTheme()
window.setTheme = setTheme
