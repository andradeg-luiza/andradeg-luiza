import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",

  fullyParallel: false,
  workers: 1,

  webServer: {
    command: "npm run build && npm run preview -- --port 4321",
    url: "http://localhost:4321",
    reuseExistingServer: true,
    timeout: 180_000 // CI precisa de mais tempo
  },

  use: {
    viewport: { width: 1920, height: 1080 },
    baseURL: "http://localhost:4321",
    headless: true,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },

  retries: 1, // importante para capturar trace

  reporter: [
    ["list"],
    ["html", { open: "never" }]
  ],

  timeout: 60_000 // CI é mais lento
});
