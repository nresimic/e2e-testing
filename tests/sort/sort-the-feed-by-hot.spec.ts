import { test, expect } from '@playwright/test';


// Title: Sort the feed by 'Hot'
test.describe('Sort the feed by \'Hot\'', () => {
  test('verifies acceptance criteria', async ({ page }) => {
    await page.goto('/feed?sort=hot');
  });
});
