import { expect, Page } from '@playwright/test';

export class LearningPage {
  constructor(private readonly page: Page) {}

  readonly route = '/learning';

  async fillSearchResources(value: string) {
    await this.page.getByRole('textbox', { name: 'Search resources...' }).fill(value);
  }
}
