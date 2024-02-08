# Tour of Heroes

🔗 [Tour of Heroes application and tutorial](https://angular.io/tutorial/tour-of-heroes)

Continue from here: https://angular.io/tutorial/tour-of-heroes/toh-pt1#edit-the-hero

The application has following features:

1. Gets a list of heroes
2. Displays the heroes in a list
3. Edits a selected hero's details
4. Navigates between different views of heroic data

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

```
ng new angular-tour-of-heroes
```

## Development Setup

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

  The ng serve command:

  - Builds the application
  - Starts the development server
  - Watches the source files
  - Rebuilds the application as you make changes
  - The `--open` flag opens a browser to http://localhost:4200.

  To run the application locally

  ```
  $ cd tour-of-heroes
  $ nvm use 18
  $ ng serve --open
  ```

- Code scaffolding: Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

- Run `ng test` to execute the unit tests via `Karma`.

- Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

- To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### All Angular CLI commands used here

`ng generate component heroes`

## Learnings

- Always `export` the component class so you can import it elsewhere … like in the `AppModule`. -`*ngFor` to display a list.
- `*ngIf` to conditionally include or exclude a block of HTML.
- Toggle a CSS style class with a class binding.

### Two-way binding

`[(ngModel)]` is Angular's two-way binding syntax.

Although `ngModel` is a valid Angular directive, it isn't available by default. It belongs to the optional `FormsModule` and you must opt in to using it.

> Angular needs to know how the pieces of your application fit together and what other files and libraries the application requires. This information is called _metadata_. Some of the metadata is in the `@Component` decorators that you added to your component classes. Other critical metadata is in `@NgModule` decorators. The most important `@NgModule` decorator annotates the top-level `AppModule` class. `ng new` created an `AppModule` class in `src/app/app.module.ts` when it created the project. This is where you opt in to the `FormsModule`.

The above is not the case for standalone applications. In case of Standalone application import `FormsModule` in the desired component.

### Using pipe

The word `uppercase` in the interpolation binding after the pipe `|` character, activates the built-in `UppercasePipe`.

```html
<!-- heroes.component.html -->
<h2>{{hero.name | uppercase}} Details</h2>
```

The hero's name is displayed in capital letters.
