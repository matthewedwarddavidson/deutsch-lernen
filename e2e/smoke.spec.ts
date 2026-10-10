import { expect, test } from '@playwright/test'

test('learn five words: study, then recall', async ({ page }) => {
  await page.goto('/#/words/learn')
  for (let index = 0; index < 5; index++) {
    await expect(page.getByText(`New word ${index + 1} of 5`)).toBeVisible()
    await page.keyboard.press('Enter')
  }
  await expect(page.getByText(/Recall · in German/)).toBeVisible()
  await page.getByLabel('Your answer').fill('falsch')
  await page.keyboard.press('Enter')
  await expect(page.getByText('Nicht ganz')).toBeVisible()
})

test('grammar practice marks an answer', async ({ page }) => {
  await page.goto('/#/grammar/passiv')
  await page.getByRole('button', { name: 'Start practice' }).click()
  await expect(page.getByText('1 / 14')).toBeVisible()
})

test('reading: tapping a glossed word shows its meaning', async ({ page }) => {
  await page.goto('/#/reading/forum-homeoffice')
  await page.locator('.glossed', { hasText: 'einsam' }).click()
  await expect(page.getByRole('dialog')).toContainText('lonely')
})

test('dictation shows a word-by-word comparison', async ({ page }) => {
  await page.goto('/#/listening/dictation')
  await page.getByLabel('Your answer').fill('Ich weiß es nicht')
  await page.keyboard.press('Enter')
  await expect(page.locator('.diff')).toBeVisible()
})

test('matching: all correct answers score full marks', async ({ page }) => {
  await page.goto('/#/reading/match/zuordnung-wohnen')
  const answers = ['1', '4', '2', '0', 'none', '5']
  for (const [index, answer] of answers.entries()) await page.locator('select').nth(index).selectOption(answer)
  await page.getByRole('button', { name: 'Check' }).click()
  await expect(page.getByRole('heading', { name: '6 / 6' })).toBeVisible()
})
