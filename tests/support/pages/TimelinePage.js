import { BasePage } from "./BasePage"

export class TimelinePage extends BasePage {
  constructor(page) {
    super(page)

    // Full page
    this.pageRoot = page.getByTestId("timeline-page")

    // Header
    this.header = page.getByTestId("timeline-header")
    this.title = page.getByTestId("timeline-title")

    // List of events
    this.list = page.getByTestId("timeline-list")

    // Individual items
    this.event1 = page.getByTestId("timeline-item-1")
    this.event2 = page.getByTestId("timeline-item-2")
    this.event3 = page.getByTestId("timeline-item-3")
    this.event4 = page.getByTestId("timeline-item-4")
    this.event5 = page.getByTestId("timeline-item-5")
  }

  async goto() {
    await super.goto("/timeline/")
  }

  async openEvent1() {
    await this.event1.click()
  }

  async openEvent2() {
    await this.event2.click()
  }

  async openEvent3() {
    await this.event3.click()
  }

  async openEvent4() {
    await this.event4.click()
  }

  async openEvent5() {
    await this.event5.click()
  }
}
