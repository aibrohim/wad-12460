import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { Publisher } from 'src/app/models/publisher.model';
import { BooksService } from 'src/app/services/books.service';
import { PublishersService } from 'src/app/services/publishers.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit, OnChanges {
  @Input() title!: string;
  @Input() onSubmit!: (book: Book) => void;
  @Input() defaultBook?: Book;

  BookProps: Book = {
    bookId: 0,
    title: '',
    isbn: '',
    isOnStock: false,
    price: 0,
    publishedDate: '',
    totalPages: 0,
    publisherId: 0,
    booksAuthors: [],
  };

  publishers: Publisher[] = [];

  constructor(
    private publishersService: PublishersService,
    private booksService: BooksService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.publishersService.getAllPublishers().subscribe({
      next: (publishers) => {
        this.publishers = publishers;
      },
      error: (res) => {
        console.log(res);
      },
    });
  }

  ngOnChanges() {
    if (this.defaultBook) this.BookProps = this.defaultBook;
  }

  handleFormSubmit() {
    this.onSubmit(this.BookProps);
  }
}
