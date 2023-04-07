import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { format } from 'date-fns';
import { BookAuthor } from 'src/app/models/book-author.model';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css'],
})
export class SingleBookComponent implements OnInit {
  book?: Book;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const bookId = params.get('id');
        if (bookId)
          this.booksService.getSingleBook(+bookId).subscribe({
            next: (book: Book) => {
              this.book = {
                ...book,
                publishedDate: format(
                  new Date(book.publishedDate),
                  'dd.MM.yyyy'
                ),
              };
            },
          });
      },
    });
  }

  handleAuthorDetach(authorId: number) {
    this.route.paramMap.subscribe({
      next: (params) => {
        const bookId = params.get('id');
        if (bookId)
          this.booksService.detachAuthor(+bookId, authorId).subscribe({
            next: () => {
              if (this.book) {
                this.book.booksAuthors = this.book.booksAuthors.filter(
                  (bookAuthor) => bookAuthor.authorId !== authorId
                );
              }
            },
          });
      },
    });
  }

  handleAuthorAddSubmit(authorId: number) {
    this.route.paramMap.subscribe({
      next: (params) => {
        const bookId = params.get('id');
        if (bookId && authorId)
          this.booksService.attachAuthor(+bookId, authorId).subscribe({
            next: (bookAuthor: BookAuthor) => {
              if (this.book) {
                this.book.booksAuthors = [
                  ...this.book.booksAuthors,
                  bookAuthor,
                ];
              }
            },
          });
      },
    });
  }

  handleSpecialPriceClick() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const bookId = params.get('id');

        if (bookId) {
          this.booksService.getBookSpecialPrice(+bookId).subscribe({
            next: (specialPrice) => {
              if (this.book) {
                this.book.specialPrice = specialPrice;
              }
            },
          });
        }
      },
    });
  }
}
