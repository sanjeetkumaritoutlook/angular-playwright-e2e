import { test, expect } from '@playwright/test';

test.skip('should display 4x4 user grid', async ({ page }) => {
  // Step 1: Go to User Grid page
  await page.goto('http://localhost:4200/about');

  // ✅ Step 2: Wait until all API calls finish
  await page.waitForLoadState('networkidle'); 

  // ✅ Step 3: Wait for the grid to appear
  await page.waitForSelector('.grid');

  // ✅ Step 4: Check total number of grid items (16)
  const gridItems = await page.locator('.user-card');
   await expect(gridItems).toHaveCount(16, { timeout: 30000 }); // Increase timeout to 30s

});
