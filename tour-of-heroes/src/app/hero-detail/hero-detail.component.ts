import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { Component, Input, inject } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
  location: Location;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private heroService: HeroService, location: Location) {
    this.location = location;
  }

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const id = Number(this.route.snapshot.params['id']);
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
