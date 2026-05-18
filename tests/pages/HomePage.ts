import { expect, Page } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  readonly route = '/home';

  async clickViewAll() {
    await this.page.getByRole('button', { name: 'View all' }).click();
  }
}
