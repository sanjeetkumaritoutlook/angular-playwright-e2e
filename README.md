# AngularE2ePlaywright

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.13.

Setup angular 17 app, without global cli version conflict:

npx @angular/cli@17 new my-app


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
