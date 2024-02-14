import { Component } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  books: Book[] = [];
  messageOnEvent: string = '';

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getBooks();
    this.clearEventMessages();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => (this.books = books));
  }

  clearEventMessages(): void {
    this.messageOnEvent = '';
  }

  add(name: string) {
    name = name.trim();
    if (!name) return;

    this.bookService.addBook({ name } as Book).subscribe((book) => {
      this.books.push(book);
      this.messageOnEvent = `Successfully added "${book.name}"! `;
    });
  }

  deleteBook(book: Book): void {
    this.bookService.deleteBook(book).subscribe(() => {
      this.books = this.books.filter((b) => b !== book);
      this.messageOnEvent = `Successfully deleted "${book.name}"! `;
    });
  }
}
