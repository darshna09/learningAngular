# First Angular Application

🔗 [Build your first Angular app](https://angular.io/tutorial/first-app)

_The base code for this application is provided by Angular Tutorial. Download the application code from [Tutorial Documentation](https://angular.io/tutorial/first-app)._

In this application we have following features

1. Display list of houses
2. Search houses by name of city (the house list updates accordingly)
3. On click of an house item, route to detail page
4. A form to apply for a house
5. Fetch list of houses using API (HTTP request)

## Development setup

1. Use node 18 and above: `nvm use 18`
2. (One time): Build the application: `npm install`
3. Run the API server (json-server):
   a. Open a new terminal, move to src directory
   b. Run the json server: `json-server --watch db.json`
   c. The API server will be running at `http://localhost:3000/locations`
4. Run the Angular application:
   a. Open a new terminal, switch to `first-app` directory
   b. Run: `ng serve`
   c. The application will be running at `http://localhost:4200/`

## How to create Angular components, interfaces & services

Create new Angular component

```
ng generate component <COMPONENT_NAME> --inline-template --skip-tests
```

Create new Angular interface

```
ng generate interface <INTERFACE_NAME>
```

Create new Angular service

```
ng generate service <SERVICE_NAME> --skip-tests
```

## Topics Covered

- Creating and using [interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html) in Angular
- [Input](https://angular.io/api/core/Input) allow components to share data. The direction of the data sharing is from parent component to child component.
  - The exclamation point is called the non-null assertion operator and it tells the TypeScript compiler that the value of this property won't be null or undefined.
  - Example, `housingLocation` cannot be null or undefined
    ```
    export class HousingLocationComponent {
        @Input() housingLocation!: HousingLocation;
    }
    ```
- [Property binding](https://angular.io/guide/property-binding) enables you to connect a variable to an `Input` in an Angular template
- `NgFor` is a built-in structural directive used to dynamically repeat data in a template
- Angular services provide a way to separate Angular app data and functions that can be used by multiple components in the app. To be used by multiple components, a service must be injectable
- Dependency injection is the mechanism that manages the dependencies of the app's components and the services that the other components can use.
- [Angular routing](https://angular.io/guide/router-tutorial)
  - Setting up Angular router
  - Routing parameters (URL parameters)
  - `routerLink` directive to create dynamic links in application
- Angular forms
- Template reference variable
  - Access value of `input` element
- HTTP connection using `json-server`

## Open Questions/Topics

### What is `CommonModule`?

```
import { CommonModule } from '@angular/common';
```

I see it is imported in all components.

### Which components go in `imports`?

- `ReactiveFormsModule` from `@angular/forms`
- `RouterModule` from `@angular/router`
- `RouterLink` and `RouterOutlet` from `@angular/router`

All these were added in the `imports` of their respective components.

But `FormControl` & `FormGroup` from `@angular/forms` were not added in the `imports`. Why?
