import { test } from '@playwright/test'

const REG_IMAGE_DIR_PATH = 'reg_images'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000')
})

test('スクショを撮る', async ({ page }) => {
  await page.screenshot({
    path: `./${REG_IMAGE_DIR_PATH}/example.png`,
    fullPage: true,
  })
})
