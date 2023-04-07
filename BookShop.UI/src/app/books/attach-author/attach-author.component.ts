import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/models/Author.model';
import { BookAuthor } from 'src/app/models/book-author.model';
import { Book } from 'src/app/models/book.model';
import { AuthorsService } from 'src/app/services/authors.service';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-attach-author',
  templateUrl: './attach-author.component.html',
  styleUrls: ['./attach-author.component.css'],
})
export class AttachAuthorComponent implements OnInit {
  @Input() bookAuthors!: BookAuthor[];
  @Input() book?: Book;
  @Input() onSubmit!: (authorId: number) => void;

  selectedAuthor: number = 0;
  authors: Author[] = [];

  get notSelectedAuthors() {
    console.log(this.authors, this.bookAuthors);

    return this.authors.filter((author) =>
      this.bookAuthors.every((ba) => ba.authorId !== author.authorId)
    );
  }

  constructor(
    private authorsService: AuthorsService,
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.authorsService.getAllAuthors().subscribe({
      next: (authors) => {
        this.authors = authors;
      },
    });
  }

  handleFormSubmit(evt: SubmitEvent) {
    this.onSubmit(this.selectedAuthor);
  }
}
