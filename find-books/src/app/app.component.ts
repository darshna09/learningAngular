import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookService } from './book.service';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'find-books';

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getBooks();
  }
  // TODO: Remove book service from here.
  getBooks() {
    this.bookService
      .getBooks()
      .subscribe((books) => console.log('books =>', books));
  }
}
