import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private url = 'api/books';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url).pipe(
      tap((_) => this.log('fetched books')),
      catchError(this.handleError<Book[]>('getBooks', []))
    );
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.url}/${id}`).pipe(
      tap((_) => this.log(`fetched book id = ${id}`)),
      catchError(this.handleError<Book>(`getBook id = ${id}`))
    );
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url, book, this.httpOptions).pipe(
      tap((newBook: Book) => this.log(`added book w/ id = ${newBook.id}`)),
      catchError(this.handleError<Book>('addBook'))
    );
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(this.url, book, this.httpOptions).pipe(
      tap((_) => this.log(`updated book id = ${book.id}`)),
      catchError(this.handleError<any>('updateBook'))
    );
  }

  deleteBook(book: Book): Observable<string> {
    return this.http.delete<string>(`${this.url}/${book.id}`).pipe(
      tap((_) => this.log(`deleted book id = ${book.id}`)),
      catchError(this.handleError<string>('deleteBook'))
    );
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  log(message: string) {
    this.messageService.pushMessage(`BookService: ${message}`);
  }
}
