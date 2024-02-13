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
