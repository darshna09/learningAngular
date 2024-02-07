/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import routeConfig from "./app/routes";
import { provideRouter } from "@angular/router";
import { AppComponent } from "./app/app.component";
import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from "@angular/platform-browser";

bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport(), provideRouter(routeConfig)],
}).catch((err) => console.error(err));
