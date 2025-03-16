import { test, expect } from '@playwright/test';
import axios from 'axios';

test.skip('Amazon Login with OTP from Mobile API', async ({ page }) => {
  const email = process.env.AMAZON_EMAIL;
  const password = process.env.AMAZON_PASSWORD;

  // Step 1: Go to Amazon
  await page.goto('https://www.amazon.in/');

  // Step 2: Enter Email and Password
  await page.click('#nav-link-accountList');
  await page.fill('#ap_email', email as string);
  await page.click('#continue');
  await page.fill('#ap_password', password as string);
  await page.click('#signInSubmit');

  // Step 3: Get OTP from SMS API
  const response = await axios.get(`https://sms-activate.org/stubs/handler_api.php?api_key=${process.env.SMS_API_KEY}&action=getStatus&id=${process.env.ORDER_ID}`);
  const otp = response.data.match(/\d{6}/)[0]; // Extract 6-digit OTP

  // Step 4: Fill OTP
  await page.fill('#auth-mfa-otpcode', otp);
  await page.click('#auth-signin-button');

  // Step 5: Verify Login Success
  await expect(page.locator('#nav-link-accountList-nav-line-1')).toContainText('Hello, Sanjeet');
});
