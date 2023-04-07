import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/models/Author.model';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css'],
})
export class AddAuthorComponent {
  constructor(private authorsService: AuthorsService, private router: Router) {}

  ngOnInit(): void {}

  handleFormSubmit(author: Author) {
    this.authorsService.addAuthor(author).subscribe({
      next: () => {
        this.router.navigate(['authors']);
      },
    });
  }
}
