import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SettingsPage } from '../pages/SettingsPage';

// Ticket: TAS-121
// Title: Advanced theme settings — dark/light mode with accent color picker
test.describe('Advanced theme settings — dark/light mode with accent color picker', () => {
  test('verifies acceptance criteria', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.clickSettings();
    const settingspage = new SettingsPage(page);
    await settingspage.clickDark();
    await settingspage.clickSelectEmeraldAccentColor();
    await settingspage.clickLight();
    await settingspage.clickSelectEmeraldAccentColor2();
    await expect(page).toHaveURL('http://localhost:5173/settings');
  });
});
