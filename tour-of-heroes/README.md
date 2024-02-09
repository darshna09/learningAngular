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

- `ng generate component heroes`
- `ng generate interface hero`
- `ng generate component hero-detail`
- `ng generate service hero`
- `ng generate component messages`
- `ng generate service message`

## Learnings

- Always `export` the component class so you can import it elsewhere … like in the `AppModule`. -`*ngFor` to display a list.
- `*ngIf` to conditionally include or exclude a block of HTML.
- Toggle a CSS style class with a class binding.
- Service-in-service scenario: Importing `messages.service` in `hero.service` which is typical scenario in development.
- Angular only binds to **public** component properties. Properties which are public get bound in the template.

### Two-way binding

- `[(ngModel)]` is Angular's two-way binding syntax.

  - Although `ngModel` is a valid Angular directive, it isn't available by default. It belongs to the optional `FormsModule` and you must opt in to using it.

  > Angular needs to know how the pieces of your application fit together and what other files and libraries the application requires. This information is called _metadata_. Some of the metadata is in the `@Component` decorators that you added to your component classes. Other critical metadata is in `@NgModule` decorators. The most important `@NgModule` decorator annotates the top-level `AppModule` class. `ng new` created an `AppModule` class in `src/app/app.module.ts` when it created the project. This is where you opt in to the `FormsModule`.

  - The above is not the case for standalone applications. In case of Standalone application import `FormsModule` in the desired component.

- The `@Input` decorator to make the hero property available for binding by the external components.

### Using pipe

The word `uppercase` in the interpolation binding after the pipe `|` character, activates the built-in `UppercasePipe`.

```html
<!-- heroes.component.html -->
<h2>{{hero.name | uppercase}} Details</h2>
```

The hero's name is displayed in capital letters.

### Angular Services

- Components shouldn't fetch or save data directly, and they certainly shouldn't knowingly present fake data.
- They should focus on presenting data and delegate data access to a service.
- Services are a great way to share information among classes that don't know each other.
- Use the dependency injection that Angular supports to inject it into the Angular component constructor.

### Lifecycle hooks

Reserve the constructor for minimal initialization such as wiring constructor parameters to properties. The constructor shouldn't do anything. It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.

### Asynchronous Signature

In real development code base, we will do API integration which will require asynchronous signature.

When we used mock data for `Heroes` we fetched the data from `hero.service` using `this.heroes = this.heroService.getHeroes()` which is a synchronous signature. We need to make the `HeroService.getHeroes()` must have asynchronous signature.

Angular's `HttpClient` method returns observable from RxJS library.

- Observable for fetching data asynchronously
- Subscribe for passes the emitted data to callback

### Routing/Navigation

For not standalone applications:

- In Angular, the best practice is to load and configure the router in a separate, top-level module. The router is dedicated to routing and imported by the root `AppModule`.
- By convention, the module class name is `AppRoutingModule` and it belongs in the `app-routing.module.ts` in the `src/app` directory.

For standalone applications:

## Further Learnings

[RxJS](https://rxjs.dev/guide/overview)

- RxJS is a library for composing asynchronous and event-based programs by using observable sequences
- ReactiveX combines the Observer pattern with the Iterator pattern and functional programming with collections to fill the need for an ideal way of managing sequences of events
- Observable: represents the idea of an invokable collection of future values or events.
