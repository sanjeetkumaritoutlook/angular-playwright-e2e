import { test, expect } from '@playwright/test';

test('Calculator should add two numbers correctly', async ({ page }) => {
  // Step 1: Navigate to the calculator page
  await page.goto('http://localhost:4200/calculator');

  // Step 2: Fill the first input
  await page.fill('input[type="number"]:nth-of-type(1)', '5');

  // Step 3: Fill the second input
  await page.fill('input[type="number"]:nth-of-type(2)', '3');

  // Step 4: Click the 'Add' button
  await page.click('button');

  // Step 5: Validate the result
  const resultText = await page.locator('h2').textContent();
  expect(resultText).toContain('8'); // ✅ 5 + 3 = 8
});
