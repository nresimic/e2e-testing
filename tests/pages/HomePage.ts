import { expect, Page } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  readonly route = '/home';

  async clickSaved() {
    await this.page.getByTestId('sidebar-nav-saved').click();
  }
}
