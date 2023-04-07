import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { format } from 'date-fns';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  defaultBook: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const activeId = params.get('id');
        if (activeId)
          this.booksService.getSingleBook(+activeId).subscribe({
            next: (book: Book) => {
              this.defaultBook = {
                ...book,
                publishedDate: format(
                  new Date(book.publishedDate),
                  'yyyy-MM-dd'
                ),
              };
            },
          });
      },
    });
  }

  handleFormSubmit(editedBook: Book) {
    this.booksService.editBook(editedBook).subscribe({
      next: (book) => {
        this.router.navigate(['/books']);
      },
    });
  }
}
