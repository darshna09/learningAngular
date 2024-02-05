import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Housinglocation } from "../housinglocation";
import { HousingLocationComponent } from "../housing-location/housing-location.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
      <section class="results">
        <app-housing-location
          [housingLocation]="housingLocation"
        ></app-housing-location>
      </section>
    </section>
  `,
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  readonly baseUrl = "https://angular.io/assets/images/tutorials/faa";
  housingLocation: Housinglocation = {
    id: 9999,
    name: "Bayou on the Bend",
    city: "Houston",
    state: "TX",
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
