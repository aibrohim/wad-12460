import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-edit-buttons',
  templateUrl: './edit-buttons.component.html',
  styleUrls: ['./edit-buttons.component.css'],
})
export class EditButtonsComponent {
  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private router: Router
  ) {}

  handleDeleteClick() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const bookId = params.get('id');
        if (bookId)
          this.booksService.deleteBook(+bookId).subscribe({
            next: () => {
              this.router.navigate(['books']);
            },
          });
      },
    });
  }
}
