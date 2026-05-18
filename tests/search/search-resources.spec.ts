import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LearningPage } from '../pages/LearningPage';

// Title: Search Resources
test.describe('Search Resources', () => {
  test('verifies acceptance criteria', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.clickLearning();
    const learningpage = new LearningPage(page);
    await learningpage.fillSearchResources('AI');
    await page.keyboard.press('Enter');
  });
});
