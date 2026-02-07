import { defineConfig } from "@playwright/test"

export default defineConfig({
  testDir: "./tests/e2e",

  fullyParallel: true,

  use: {
    baseURL: "http://localhost:4321",
    headless: true,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  retries: 1,

  reporter: [
    ["list"],
    ["html", { open: "never" }]
  ],

  timeout: 30_000,
})
