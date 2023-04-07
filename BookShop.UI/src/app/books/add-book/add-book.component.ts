import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  constructor(private booksService: BooksService, private router: Router) {}

  ngOnInit(): void {}

  handleFormSubmit(book: Book) {
    this.booksService.addBook(book).subscribe({
      next: (book) => {
        console.log(book, 'hello');

        this.router.navigate(['books']);
      },
    });
  }
}
