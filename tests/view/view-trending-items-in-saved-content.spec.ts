import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

// Title: View Trending Items in Saved Content
test.describe('View Trending Items in Saved Content', () => {
  test('verifies acceptance criteria', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.clickSaved();
  });
});
