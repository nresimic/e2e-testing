import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

// Title: Navigate to Learning Hub
test.describe('Navigate to Learning Hub', () => {
  test('verifies acceptance criteria', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.clickLearning();
    await expect(page.getByText('Learning Hub')).toBeVisible();
    await expect(page.getByText('Learning Hub')).toBeVisible();
    await expect(page.getByText('Learning Hub')).toBeVisible();
    await expect(page.getByText('Learning Hub')).toBeVisible();
    await expect(page.getByText('Learning Hub')).toBeVisible();
  });
});
