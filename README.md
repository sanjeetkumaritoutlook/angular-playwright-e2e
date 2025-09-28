# AngularE2ePlaywright

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.13.

Setup angular 17 app, without global cli version conflict:

npx @angular/cli@17 new my-app

npx @angular/cli@17 new my-app --no-standalone

## Running end-to-end tests (General)

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Run playwright

npx playwright test

npx playwright show-report

npx playwright show-trace


open browser manually (parallelly run ng serve in another terminal)

npx playwright test --headed

npx playwright test e2e/user-grid.spec.ts --headed


## check if Allure results are actually being generated.

check if the allure-results/ folder is being created 

npx playwright test --reporter=line,allure-playwright

## If you haven't added the Angular Router yet:

ng g m app-routing --flat --module=app

## 🌟 How to View the Trace?

npx playwright show-trace test-results/<your-test-folder>/trace.zip


## badges/shields in github actions
(main_14104423181_1) is the GitHub Actions run name.

⚡ But here’s the difference vs Bamboo:

Bamboo badges let you display a specific build number (483-master+483, etc.).

GitHub’s native workflow badge only shows status (passing / failing), not the run name or run number.


✅ 1. Build / Test Status Badges

[![Build](https://github.com/sanjeetkumaritoutlook/angular-playwright-e2e/actions/workflows/deploy.yml/badge.svg)](https://github.com/sanjeetkumaritoutlook/angular-playwright-e2e/actions/workflows/deploy.yml)
[![Tests](https://github.com/sanjeetkumaritoutlook/angular-playwright-e2e/actions/workflows/playwright.yml/badge.svg)](https://github.com/sanjeetkumaritoutlook/angular-playwright-e2e/actions/workflows/playwright.yml)

✅ 2. Environment Deploy Badges

Option A: Separate Workflows Per Environment

[![Dev Deploy](https://github.com/sanjeetkumaritoutlook/angular-playwright-e2e/actions/workflows/deploy.yml/badge.svg)](https://github.com/sanjeetkumaritoutlook/angular-playwright-e2e/actions/workflows/deploy.yml)

Option B: Single Workflow with Multiple Jobs

![Dev Deploy Tests](https://img.shields.io/github/actions/workflow/status/sanjeetkumaritoutlook/angular-playwright-e2e/playwright.yml?branch=main&event=workflow_dispatch&label=Playwright%20E2E%20Tests%20(Only%20on%20Manual%20Run))

✅ 3. Build number Badges

[![Build Number](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/sanjeetkumaritoutlook/angular-playwright-e2e/gh-pages/build-number.txt)](https://sanjeetkumaritoutlook.github.io/angular-playwright-e2e/build-number.txt)

![Build Number semi-automatic](https://raw.githubusercontent.com/sanjeetkumaritoutlook/angular-playwright-e2e/main/build-number.txt)


[Latest Build Number](https://github.com/sanjeetkumaritoutlook/angular-playwright-e2e/actions/runs/<RUN_ID>)

Latest Build: **![Build](https://img.shields.io/badge/build-#PLACEHOLDER-blue)**

![Build Badge](https://img.shields.io/badge/build-#BUILD_NUMBER-blue)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
