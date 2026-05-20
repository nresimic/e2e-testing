import { expect, Page } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  readonly route = '/home';

  async clickSettings() {
    await this.page.getByRole('link', { name: 'Settings' }).click();
  }
}
