import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  topBooks: Book[] = [];

  constructor(public bookService: BookService) {}

  ngOnInit() {
    this.getTopBooks();
  }

  getTopBooks(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.topBooks = books.slice(0, 4);
    });
  }
}
