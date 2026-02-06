import { defineConfig } from "@playwright/test"

export default defineConfig({
  testDir: "./tests/e2e",
  use: {
    headless: true,
    baseURL: "http://localhost:4321",
  },
  webServer: {
    command: "npm run dev",
    port: 4321,
    reuseExistingServer: !process.env.CI,
  },
})
