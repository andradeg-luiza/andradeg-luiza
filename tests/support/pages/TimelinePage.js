import { BasePage } from "./BasePage"

export class TimelinePage extends BasePage {
  constructor(page) {
    super(page)

    this.title = page.getByRole("heading", { name: /timeline/i })

    this.timelineEvents = page.locator("[data-testid='timeline-event']")

    this.eventDates = page.locator("[data-testid='timeline-date']")

    this.eventDescriptions = page.locator("[data-testid='timeline-description']")
  }

  async goto() {
    await super.goto("/timeline")
  }

  async openFirstEvent() {
    await this.timelineEvents.first().click()
  }
}
