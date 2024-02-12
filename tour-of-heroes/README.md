# Tour of Heroes

🔗 [Tour of Heroes application and tutorial](https://angular.io/tutorial/tour-of-heroes)

The application has following features:

1. Setting up local API server using Angular `in-memory-web-api` to server list of heroes
2. There are following components:

- Dashboard
  - Nav items to switch Heroes component
  - 5 heros (spliced from heroes list)
  - Search heroes
  - Show log messages
- Heroes
  - List of heroes
  - Add a new hero
  - Delete a hero
  - Show log messages
- Heroes Details
  - Displays about the hero
  - This can be accessed from across the application
- Hero search:
  - Search box with list of searched items

> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Development Setup

To run the application locally

```
$ cd tour-of-heroes
$ nvm use 18
$ ng serve --open
```

The application will automatically reload if you change any of the source files.

The `ng serve` command:

- Builds the application
- Starts the development server
- Watches the source files
- Rebuilds the application as you make changes
- The `--open` flag opens a browser to http://localhost:4200.

## Learnings

Using the `ng new angular-tour-of-heroes` CLI command this project started. This made a standalone application. But the course is designed for non-standalone applications. Thus there were scenarios in a few steps to be altered.

### Quick learnings

- Always `export` the component class so you can import it elsewhere.
  - Import is required if you want to use it in `html` using the component selector
- Angular provides a set of built-in structural directives
  - `*ngFor` to display a list.
  - `*ngIf` to conditionally include or exclude a block of HTML.
- Toggle a CSS style class with a class binding.
  - `[class.selected]="hero === selectedHero"`
- Service-in-service scenario: Importing `messages.service` in `hero.service` which is typical scenario in development.
- Angular only binds to **public** component properties. Properties which are public get bound in the template.
- `AsyncPipe` - Unwraps a value from an asynchronous primitive. When used with an observable the `subscribe` is handled by `async` pipe.

### Two-way binding

`[(ngModel)]` is Angular's two-way binding syntax.

Although `ngModel` is a valid Angular directive, it isn't available by default. It belongs to the optional `FormsModule` and you must opt in to using it.

> Angular needs to know how the pieces of your application fit together and what other files and libraries the application requires. This information is called _metadata_. Some of the metadata is in the `@Component` decorators that you added to your component classes. Other critical metadata is in `@NgModule` decorators. The most important `@NgModule` decorator annotates the top-level `AppModule` class. `ng new` created an `AppModule` class in `src/app/app.module.ts` when it created the project. This is where you opt in to the `FormsModule`.

The above is not the case for standalone applications. In case of Standalone application import `FormsModule` in the desired component.

The `@Input` decorator to make the hero property available for binding by the external components.

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

### Routing/Navigation

For non-standalone applications:

- In Angular, the best practice is to load and configure the router in a separate, top-level module. The router is dedicated to routing and imported by the root `AppModule`.
- By convention, the module class name is `AppRoutingModule` and it belongs in the `app-routing.module.ts` in the `src/app` directory.

For standalone applications:

1. With `ng new` the router setup is default.
2. In `app.component.ts` import `RouteModule` from `@angular/router` and add in component imports.
3. Add `<router-outlet>` in `app.component.html` with `nav` items. The `<router-outlet>` tells the router where to display routed views.
4. Update the routes in `app.routes.ts` file.
5. For using route params like `id`
6. Import `RouterLink` & `RouterOutlet` from `@angular/router` and add them to the component `imports`
7. The link which enables route, use `routerLink` attribute and pass the route path and `id`
8. In the routed component read the route using `ActivatedRoute` route Angular API

```html
<div class="heroes-menu">
  <a *ngFor="let hero of heroes" [routerLink]="['/detail', hero.id]">{{ hero.name }}</a>
</div>
```

```js
//...In export class
route: ActivatedRoute = inject(ActivatedRoute);

//...Reading the URL param
const id = Number(this.route.snapshot.params["id"]);
```

Use `Location` service from `@angular/common` that applications can use to interact with a browser's URL. (See `hero-detail.component.ts`)

### Connecting with server

#### Asynchronous Signature

In real development code base, we will do API integration which will require asynchronous signature.

When we used mock data for `Heroes` we fetched the data from `hero.service` using `this.heroes = this.heroService.getHeroes()` which is a synchronous signature. We need to make the `HeroService.getHeroes()` must have asynchronous signature.

Angular's `HttpClient` method returns observable from RxJS library.

- Observable for fetching data asynchronously
- Subscribe for passes the emitted data to callback

#### Faking API server with [Angular `in-memory-web-api`](https://github.com/angular/angular/tree/main/packages/misc/angular-in-memory-web-api)

> An in-memory web api for Angular demos and tests that emulates CRUD operations over a RESTy API. It intercepts Angular `Http` and `HttpClient` requests that would otherwise go to the remote server and redirects them to an in-memory data store that you control.

_The tutorial gives the steps for for non-standalone applications._

Setting up `in-memory-web-api` for standalone applications:

See `app.config.ts` to bootstrap `angular-in-memory-web-api` which is a `NgModule`.

> `importProvidersFrom` by `@angular/core` collects providers from all `NgModules` and other standalone components, including transitively imported ones.

```ts
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), importProvidersFrom([HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)])],
};
```

`InMemoryDataService` is the Angular service that implements `InMemoryDbService` by `angular-in-memory-web-api` for mocking the HTTP requests. (See file `in-memory-data.service.ts`).

#### `HttpClient`

[`HttpClient`](https://angular.io/api/common/http/HttpClient) - Performs HTTP requests. This service is available as an injectable class, with methods to perform HTTP requests.

```
import { HttpClient, HttpHeaders } from '@angular/common/http';
```

All `HttpClient` methods return an RxJS Observable of something. HTTP is a request/response protocol. You make a request, it returns a **single** response.

In general, an observable can return more than one value over time. An observable from `HttpClient` always emits a single value and then completes, never to emit again.

## Further Learnings

### [RxJS](https://rxjs.dev/guide/overview)

This has been used heavily in the application.

- RxJS is a library for composing asynchronous and event-based programs by using observable sequences
- ReactiveX combines the Observer pattern with the Iterator pattern and functional programming with collections to fill the need for an ideal way of managing sequences of events
- Observable: represents the idea of an invokable collection of future values or events.
- If you neglect to `subscribe()`, the service can't send the delete request to the server. As a rule, an Observable does nothing until something subscribes.
- A `Subject` is both a source of observable values and an Observable itself. You can subscribe to a `Subject` as you would any `Observable`. You can also push values into that `Observable` by calling its `next(value)` method.
- `switchMap()` calls the search service for each search term that makes it through `debounce()` and `distinctUntilChanged()`. It cancels and discards previous search observables, returning only the latest search service observable.

### Writing Unit Tests

Currently there is no unit test written for this application.

## Other details

### All Angular CLI commands used here

- `ng new angular-tour-of-heroes`
- `ng generate component heroes`
- `ng generate interface hero`
- `ng generate component hero-detail`
- `ng generate service hero`
- `ng generate component messages`
- `ng generate service message`
- `ng generate component dashboard`
- `npm install angular-in-memory-web-api --save`
- `ng generate service InMemoryData`
- `ng generate component hero-search`

### Other Angular commands

- Code scaffolding: Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
- Run `ng test` to execute the unit tests via `Karma`.
- Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
- To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
