import { test, expect } from '@playwright/test';

test('Calculator should perform basic arithmetic operations', async ({ page }) => {
  // Step 1: Go to the Angular Calculator App
  await page.goto('http://localhost:4200/calculator');

  // Step 2: Fill numbers in input fields
  await page.fill('input:nth-of-type(1)', '10');
  await page.fill('input:nth-of-type(2)', '5');

  // Step 3: Click Add and Verify the Result
  await page.click('text=Add');
  await expect(page.locator('h2')).toHaveText('Result: 15');

  // Step 4: Subtract and Verify
  await page.click('text=Subtract');
  await expect(page.locator('h2')).toHaveText('Result: 5');

  // Step 5: Multiply and Verify
  await page.click('text=Multiply');
  await expect(page.locator('h2')).toHaveText('Result: 50');

  // Step 6: Divide and Verify
  await page.click('text=Divide');
  await expect(page.locator('h2')).toHaveText('Result: 2');
});