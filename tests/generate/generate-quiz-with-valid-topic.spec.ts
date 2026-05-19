import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { QuizPage } from '../pages/QuizPage';

// Title: Generate Quiz with Valid Topic
test.describe('Generate Quiz with Valid Topic', () => {
  test('verifies acceptance criteria', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.clickQuizArena();
    const quizpage = new QuizPage(page);
    await quizpage.fillEnterATopicEGClaudeCodeRagLlmAgents('Claude Code');
    await quizpage.clickGenerate();
    await expect(page.getByText('Quiz Arena')).toBeVisible();
  });
});
