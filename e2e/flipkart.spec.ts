import { test, expect } from '@playwright/test';

test.skip('Flipkart Search and Add to Cart Flow', async ({ page }) => {
  // Step 1: Go to Flipkart
  await page.goto('https://www.flipkart.com/');

  // Step 2: Close Login Popup
  await page.click('button:has-text("✕")');

  // Step 3: Search for "iPhone 15 Pro"
  await page.fill('input[title="Search for products, brands and more"]', 'iPhone 15 Pro');
  await page.press('input[title="Search for products, brands and more"]', 'Enter');

  // Step 4: Filter Price ₹60,000 - ₹80,000
  await page.click('text=₹60000 - ₹80000');

  // Step 5: Click First Product
  const firstProduct = await page.locator('.IRpwTa').first();
  const productName = await firstProduct.innerText();
  await firstProduct.click();

  // Step 6: Switch to New Tab
  const newPage = await page.context().pages()[1];
  await newPage.waitForLoadState();

  // Step 7: Add to Cart
  await newPage.click('button:has-text("Add to Cart")');

  // Step 8: Verify Product in Cart
  const cartProductName = await newPage.locator('._2-uG6-').innerText();
  expect(cartProductName).toContain('iPhone 15 Pro');
});
