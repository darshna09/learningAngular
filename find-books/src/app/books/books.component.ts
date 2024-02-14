import { Component, Input } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  // TODO: Move to detail-book once routing is implemented
  @Input() book?: Book;

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

  // TODO: Move to book detail when route is implemented
  save(): void {
    if (this.book) {
      this.bookService.updateBook(this.book).subscribe(() => {
        this.messageOnEvent = `Successfully updated "${
          this.book?.name || ''
        }"! `;
      });
    }
  }

  // TODO: Delete after routing is implemented
  editBook(book: Book): void {
    this.book = book;
  }
}
