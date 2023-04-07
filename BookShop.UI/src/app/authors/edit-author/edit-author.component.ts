import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/models/Author.model';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css'],
})
export class EditAuthorComponent {
  defaultAuthor: Author | undefined;

  constructor(
    private route: ActivatedRoute,
    private authorsService: AuthorsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const activeId = params.get('id');
        if (activeId)
          this.authorsService.getSingleAuthor(+activeId).subscribe({
            next: (author: Author) => {
              this.defaultAuthor = author;
            },
          });
      },
    });
  }

  handleFormSubmit(editedAuthor: Author) {
    this.authorsService.editAuthor(editedAuthor).subscribe({
      next: () => {
        this.router.navigate(['/authors']);
      },
    });
  }
}
