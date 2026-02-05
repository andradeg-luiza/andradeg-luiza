import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: "https://andradeg-luiza.github.io/andradeg-luiza",
  base: "/andradeg-luiza/",
  integrations: [
    tailwind(),
    sitemap()
  ]
})
