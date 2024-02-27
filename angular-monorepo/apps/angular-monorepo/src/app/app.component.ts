import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '@angular-monorepo/products';

@Component({
  standalone: true,
  imports: [ProductListComponent, RouterModule],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-monorepo';
}
