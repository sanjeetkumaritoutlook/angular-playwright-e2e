import { test, expect } from '@playwright/test';

test('Real World Calculator should perform all operations', async ({ page }) => {
  await page.goto('http://localhost:4200/complex-calculator');

 // Click buttons instead of directly filling the input field as the input field at top is readonly
 //We are simulating actual user clicks for each button (like 1, 0, +, 5, and =).

  await page.click('text=1');
  await page.click('text=0');
  await page.click('text=+');
  await page.click('text=5');
  await page.click('text==');

  // Validate the result
  await expect(page.locator('input')).toHaveValue('105');

  // Memory Functionality
 
});
