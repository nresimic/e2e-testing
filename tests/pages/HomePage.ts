import { expect, Page } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  readonly route = '/home';

  async clickLearning() {
    await this.page.getByTestId('sidebar-nav-learning').click();
  }
}
