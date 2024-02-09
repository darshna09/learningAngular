import { Hero } from '../hero';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';
import { CommonModule } from '@angular/common';
import { MessageService } from '../message.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  // Called after constructing the component instance
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Hero component: Selected hero id: ${hero.id}`);
  }
}
