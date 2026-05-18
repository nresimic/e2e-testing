import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { FeedPage } from '../pages/FeedPage';

// Ticket: TAS-119
// Title: Display all feed results — hidden articles due to quality filter
test.describe('Display all feed results — hidden articles due to quality filter', () => {
  test('verifies acceptance criteria', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.clickViewAll();
    const feedpage = new FeedPage(page);
    await feedpage.clickShowAll();
    await feedpage.clickShowAll2();
    await feedpage.clickShowAll3();
    await feedpage.clickShowAll4();
  });
});
