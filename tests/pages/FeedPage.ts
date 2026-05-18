import { expect, Page } from '@playwright/test';

export class FeedPage {
  constructor(private readonly page: Page) {}

  readonly route = '/feed';

  async clickShowAll() {
    await this.page.getByTestId('show-all-filter').click();
  }

  async clickShowAll2() {
    await this.page.getByTestId('show-all-filter').click();
  }

  async clickShowAll3() {
    await this.page.getByTestId('show-all-filter').click();
  }

  async clickShowAll4() {
    await this.page.getByTestId('show-all-filter').click();
  }
}
