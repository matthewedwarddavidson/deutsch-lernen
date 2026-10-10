// Takes screenshots of app pages for visual checks.
// Usage: node scripts/screenshot.mjs <outDir> <path> [<path> ...]
// Set WIDTH, DARK=1 or SEED=1 (fake some progress) as needed.
import { chromium } from '@playwright/test'

const [outDir, ...paths] = process.argv.slice(2)
const width = Number(process.env.WIDTH ?? 1280)
const browser = await chromium.launch()
const page = await browser.newPage({
  viewport: { width, height: 900 },
  colorScheme: process.env.DARK ? 'dark' : 'light',
})
page.on('pageerror', (error) => console.error('PAGE ERROR', error.message))
page.on('console', (message) => {
  if (message.type() === 'error') console.error('CONSOLE', message.text())
})
for (const path of paths) {
  await page.goto(`http://localhost:5173${path}`)
  await page.waitForTimeout(600)
  const name = path.replace(/[^a-z0-9]+/gi, '_') || 'root'
  await page.screenshot({ path: `${outDir}/${name}${process.env.DARK ? '_dark' : ''}_${width}.png`, fullPage: true })
  console.log('saved', name)
}
await browser.close()
