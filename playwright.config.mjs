import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",

  // Evita múltiplos servidores Astro rodando ao mesmo tempo
  fullyParallel: false,
  workers: 1,

  // Usa build + preview (HTML estático e estável)
  webServer: {
    command: "npm run build && npm run preview -- --port 4321",
    url: "http://localhost:4321",
    reuseExistingServer: true,
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
