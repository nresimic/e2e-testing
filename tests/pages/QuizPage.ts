import { expect, Page } from '@playwright/test';

export class QuizPage {
  constructor(private readonly page: Page) {}

  readonly route = '/quiz';

  async fillEnterATopicEGClaudeCodeRagLlmAgents(value: string) {
    await this.page.getByTestId('quiz-topic-input').fill(value);
  }

  async clickGenerate() {
    await this.page.getByTestId('quiz-generate-btn').click();
  }
}
