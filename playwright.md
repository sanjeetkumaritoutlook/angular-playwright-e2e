## Playwright

Playwright is the E2E (end-to-end) testing framework created by Microsoft.

https://github.com/microsoft/playwright

It lets you automate browsers like Chrome, Firefox, Safari, Edge.

Playwright tests can be run locally or in CI (Continuous Integration).

✅ What it does

Launches the browser

Interacts with your Angular app (click buttons, fill forms, check UI)

Validates that your app behaves correctly

Example test:
```
import { test, expect } from '@playwright/test';

test('user can login', async ({ page }) => {
  await page.goto('http://localhost:4200/login');
  await page.fill('#username', 'demo');
  await page.fill('#password', 'demo123');
  await page.click('button[type=submit]');
  await expect(page).toHaveURL('/dashboard');
});
```

## LambdaTest

LambdaTest is a cloud testing platform that provides:

Cross-browser testing on real browsers and devices

Parallel execution for faster test runs

Integration with Playwright, Selenium, Cypress, etc.

So instead of running Playwright only on your laptop,

you can run it on 100+ browser/device combinations in the cloud.

✅ Example:

Your test runs on Chrome (Windows 11), Safari (macOS), and Edge (Windows 10) — simultaneously on LambdaTest’s infrastructure

## 4. HyperExecute

HyperExecute is LambdaTest’s next-gen test orchestration platform — think of it as a super-fast CI/CD runner built specifically for testing.

It’s used instead of GitHub Actions or Jenkins to:

Run your Playwright tests in parallel (split across multiple machines)

Reduce execution time from minutes to seconds

Collect results, screenshots, videos, and logs

Integrate seamlessly with LambdaTest dashboards

```
LambdaTest → the cloud testing platform (browsers, devices, dashboards)

HyperExecute → the CI/CD execution layer for running those tests faster
```
Common config file: hyperexecute.yaml

```
version: 0.1
runson: linux
concurrency: 3
pre:
  - npm ci
  - npx playwright install --with-deps
testDiscovery:
  type: raw
  mode: dynamic
  command: npx playwright test --list
testRunnerCommand: npx playwright test --grep "@smoke"
```
This file tells HyperExecute how to run your Playwright tests — how many parallel runners, which OS, how to set up dependencies, etc.

```
Angular App (frontend)
   ↓
Playwright Tests (E2E automation)
   ↓
HyperExecute (runs these tests in parallel)
   ↓
LambdaTest Cloud (provides browsers & results dashboard)
   ↓
GitHub Actions (optional, triggers HyperExecute job)
```

So when you push a commit or open a PR:
```
GitHub Action triggers a HyperExecute run

HyperExecute executes Playwright tests across browsers

LambdaTest provides cloud infrastructure, logs, and reporting

Results appear in both LambdaTest Dashboard and GitHub CI logs
```
