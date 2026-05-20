import { expect, Page } from '@playwright/test';

export class SettingsPage {
  constructor(private readonly page: Page) {}

  readonly route = '/settings';

  async clickDark() {
    await this.page.getByTestId('theme-mode-dark').click();
  }

  async clickSelectEmeraldAccentColor() {
    await this.page.getByTestId('accent-color-emerald').click();
  }

  async clickLight() {
    await this.page.getByTestId('theme-mode-light').click();
  }

  async clickSelectEmeraldAccentColor2() {
    await this.page.getByTestId('accent-color-emerald').click();
  }
}
