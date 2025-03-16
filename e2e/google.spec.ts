import { test, expect } from '@playwright/test';

test.skip('Google Search Test', async ({ page }) => {
  // Step 1: Go to Google
  await page.goto('https://www.google.com/');

  // Step 2: Search for 'Playwright'
  await page.fill('input[name="q"]', 'Playwright');
  await page.press('input[name="q"]', 'Enter');

  // Step 3: Verify Search Result
  await expect(page).toHaveTitle(/Playwright/);
});
