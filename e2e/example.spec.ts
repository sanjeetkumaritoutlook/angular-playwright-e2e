import { test, expect } from '@playwright/test';

test('should have correct title', async ({ page }) => {
  await page.goto('http://localhost:4200');

  // ✅ Expect Angular app title
  await expect(page).toHaveTitle(/AngularE2ePlaywright/);
});

test('should navigate to Home', async ({ page }) => {
  await page.goto('http://localhost:4200');

  // ✅ Check if Home link is visible
  const homeLink = page.locator('a[routerLink="/"]');
  await expect(homeLink).toBeVisible();

  // ✅ Click on Home link
  await homeLink.click();

  // ✅ Check if redirected to Home page
  await expect(page).toHaveURL('http://localhost:4200/');
});

test('should navigate to Allure Report', async ({ page }) => {
  await page.goto('http://localhost:4200');

  // ✅ Click on "View Test Report" link
  const allureLink = page.locator('a[href="https://sanjeetkumaritoutlook.github.io/angular-e2e-playwright/allure-report/"]');
  await expect(allureLink).toBeVisible();

  // ✅ Open in new tab
  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    allureLink.click()
  ]);

  // ✅ Check if Allure report opens
  await expect(newPage).toHaveURL(/allure-report/);
});

test('should display Angular Hello message', async ({ page }) => {
  await page.goto('http://localhost:4200');

  const title = await page.locator('.app-title');
   await expect(title).toContainText('Hello');
});
