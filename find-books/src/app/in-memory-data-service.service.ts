import { Book } from './book';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const books: Book[] = [
      { id: 1, name: 'The Great Gatsby' },
      { id: 2, name: 'The Catcher in the Rye' },
      { id: 3, name: 'To Kill a Mockingbird' },
      { id: 4, name: '1984' },
      { id: 5, name: 'The Grapes of Wrath' },
      { id: 6, name: 'The Lord of the Rings' },
      { id: 7, name: 'The Hobbit' },
      { id: 8, name: 'The Fellowship of the Ring' },
      { id: 9, name: 'The Two Towers' },
      { id: 10, name: 'The Return of the King' },
    ];

    return { books };
  }

  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map((book) => book.id)) + 1 : 1;
  }
}
