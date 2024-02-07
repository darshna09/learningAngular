# First Angular Application

_The base code for this application is provided by Angular Tutorial. Download the application code from [Tutorial Documentation](https://angular.io/tutorial/first-app)._

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

Topics Covered

- Interfaces
- Inputs allow components to share data. The direction of the data sharing is from parent component to child component.
  - The exclamation point is called the non-null assertion operator and it tells the TypeScript compiler that the value of this property won't be null or undefined.
  - Example, `housingLocation` cannot be null or undefined
  ```
  export class HousingLocationComponent {
      @Input() housingLocation!: HousingLocation;
  }
  ```
- Property binding
- `NgFor` builtin structural directive
- Angular services and dependency injection
- Angular routing
  - Routing parameters
  - `routerLink` directive to create dynamic links in application

Open Questions/Topics

What is `CommonModule`?

```
import { CommonModule } from '@angular/common';
```

I see it is imported in all components.
