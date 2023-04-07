import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/models/Author.model';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css'],
})
export class AuthorFormComponent {
  @Input() title!: string;
  @Input() defaultAuthor?: Author;
  @Input() onSubmit!: (author: Author) => void;

  AuthorProps: Author = {
    authorId: 0,
    firstName: '',
    lastName: '',
  };

  constructor(private authorsService: AuthorsService, private router: Router) {}

  ngOnChanges() {
    if (this.defaultAuthor) this.AuthorProps = this.defaultAuthor;
  }

  handleFormSubmit() {
    this.onSubmit(this.AuthorProps);
  }
}
