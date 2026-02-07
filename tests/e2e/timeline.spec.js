import { test } from "@playwright/test"
import { TimelinePage } from "../support/pages/TimelinePage"

test.describe("Timeline Page", () => {
  test("exibe eventos da timeline", async ({ page }) => {
    const timeline = new TimelinePage(page)

    await timeline.goto()

    await timeline.expectVisible(timeline.title)
    await timeline.expectVisible(timeline.timelineEvents.first())
  })
})
