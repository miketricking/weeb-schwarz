# weeb-schwarz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




##  Run build for gh-pages: (might need to run 'npx nx clear-cache' first otherwise it does not build out the new changes)
ng build --prod


##  Deploy to gh-pages: (This should trigger a commit to the gh-pages branch: https://github.com/miketricking/weeb-schwarz/commits/gh-pages and then fire off a deployment action https://github.com/miketricking/weeb-schwarz/actions. I've had times where it does not work, the only way I could get it working was to remove the --dir from it which takes the site down and then run again with it back on the end)
npx angular-cli-ghpages --dir=dist/weeb-schwarz