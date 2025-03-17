import { test, expect } from '@playwright/test';

test('Real World Calculator should perform all operations', async ({ page }) => {
  await page.goto('http://localhost:4200/complex-calculator');

  await page.fill('input', '10+5');
  await page.click('text==');
  await expect(page.locator('input')).toHaveValue('15');

  await page.fill('input', '20-10');
  await page.click('text==');
  await expect(page.locator('input')).toHaveValue('10');

  await page.fill('input', '5*5');
  await page.click('text==');
  await expect(page.locator('input')).toHaveValue('25');

  await page.fill('input', '50/5');
  await page.click('text==');
  await expect(page.locator('input')).toHaveValue('10');

  // Memory Functionality
  await page.fill('input', '5');
  await page.click('text=M+');
  await page.click('text=MR');
  await expect(page.locator('input')).toHaveValue('5');
});
