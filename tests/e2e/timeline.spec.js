import { test } from "@playwright/test"
import { TimelinePage } from "../support/pages/TimelinePage"

test.describe("Timeline Page", () => {
  test("Displays timeline events", async ({ page }) => {
    const timeline = new TimelinePage(page)

    await timeline.goto()

    await timeline.expectVisible(timeline.title)

    // Verifica pelo menos o primeiro evento
    await timeline.expectVisible(timeline.event1)

    // Valida todos os eventos
    await timeline.expectVisible(timeline.event2)
    await timeline.expectVisible(timeline.event3)
    await timeline.expectVisible(timeline.event4)
    await timeline.expectVisible(timeline.event5)
  })
})
