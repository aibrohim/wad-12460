import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-edit-author-btns',
  templateUrl: './edit-author-btns.component.html',
  styleUrls: ['./edit-author-btns.component.css'],
})
export class EditAuthorBtnsComponent {
  constructor(
    private route: ActivatedRoute,
    private authorsService: AuthorsService,
    private router: Router
  ) {}

  handleDeleteClick() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const authorId = params.get('id');
        if (authorId)
          this.authorsService.deleteAuthor(+authorId).subscribe({
            next: () => {
              this.router.navigate(['authors']);
            },
          });
      },
    });
  }
}
