import { expect, Page } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  readonly route = '/home';

  async clickQuizArena() {
    await this.page.getByRole('button', { name: 'Quiz Arena' }).click();
  }
}
