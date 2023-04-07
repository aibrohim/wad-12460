import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/Author.model';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css'],
})
export class AuthorsListComponent implements OnInit {
  authors: Author[] = [];

  constructor(private authorsService: AuthorsService) {}

  ngOnInit(): void {
    this.authorsService.getAllAuthors().subscribe({
      next: (authors) => {
        this.authors = authors;
      },
      error: (res) => {
        console.log(res);
      },
    });
  }
}
