import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
})
export class BookDetailComponent {
  @Input() book?: Book;
  messageOnEvent: string = '';
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBook(id).subscribe((book) => (this.book = book));
  }

  save(): void {
    if (this.book) {
      this.bookService.updateBook(this.book).subscribe(() => {
        this.messageOnEvent = `Successfully updated "${
          this.book?.name || ''
        }"! `;
      });
    }
  }
}
