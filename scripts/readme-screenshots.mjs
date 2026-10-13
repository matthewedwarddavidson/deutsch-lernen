// Takes the README screenshots, with demo progress loaded.
// Usage: npx tsx scripts/demo-state.ts > /tmp/demo-state.json
//        node scripts/readme-screenshots.mjs /tmp/demo-state.json   (with `npx vite --port 5174` running)
import { readFileSync } from 'node:fs'
import { chromium } from '@playwright/test'

const BASE = 'http://localhost:5174/'
const OUT = 'docs/screenshots'
const demoState = readFileSync(process.argv[2], 'utf8')

const SHOTS = [
  { name: 'today', path: '#/' },
  { name: 'today-dark', path: '#/', dark: true },
  {
    name: 'review',
    path: '#/review',
    height: 640,
    action: async (page) => {
      await page.getByLabel('Your answer').fill('mindestens')
      await page.keyboard.press('Enter')
    },
  },
  { name: 'grammar', path: '#/grammar/adjektivdeklination' },
  {
    name: 'reading',
    path: '#/reading/forum-homeoffice',
    action: async (page) => {
      const word = page.locator('.glossed', { hasText: 'einsam' })
      await word.scrollIntoViewIfNeeded()
      await word.click()
    },
  },
  { name: 'listening', path: '#/listening/gespraech-wg-kueche' },
  { name: 'writing', path: '#/writing/umzug-hilfe' },
  { name: 'progress', path: '#/progress' },
  { name: 'phone', path: '#/words/learn', width: 390, height: 780 },
]

const browser = await chromium.launch()
for (const shot of SHOTS) {
  const page = await browser.newPage({
    viewport: { width: shot.width ?? 1200, height: shot.height ?? 820 },
    deviceScaleFactor: 2,
    colorScheme: shot.dark ? 'dark' : 'light',
  })
  await page.addInitScript((state) => {
    localStorage.setItem('deutsch-lernen:v1', state)
    // Repeatable shuffles, so the same review card comes up each time.
    let seed = 7
    Math.random = () => {
      seed = (seed * 1103515245 + 12345) % 2 ** 31
      return seed / 2 ** 31
    }
  }, demoState)
  await page.goto(BASE + shot.path)
  await page.waitForTimeout(800)
  if (shot.action) {
    await shot.action(page)
    await page.waitForTimeout(400)
  }
  await page.screenshot({ path: `${OUT}/${shot.name}.png` })
  console.log('saved', shot.name)
  await page.close()
}
await browser.close()
