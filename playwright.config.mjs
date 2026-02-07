import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",

  fullyParallel: true,

  webServer: {
    command: "node ./node_modules/astro/astro.js dev --host --port 4321",
    url: "http://localhost:4321",
    reuseExistingServer: false,
    timeout: 120_000
  },

  use: {
    viewport: { width: 1920, height: 1080 },
    baseURL: "http://localhost:4321",
    headless: true,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },

  retries: 0,

  reporter: [
    ["list"],
    ["html", { open: "never" }]
  ],

  timeout: 30_000
});