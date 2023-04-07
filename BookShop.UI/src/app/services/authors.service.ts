import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Author } from '../models/Author.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  baseApiURL: string = environment.baseApiUrl;
  constructor(private http: HttpClient) {}

  getAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.baseApiURL}/authors`);
  }

  getSingleAuthor(authorId: number): Observable<Author> {
    return this.http.get<Author>(`${this.baseApiURL}/authors/${authorId}`);
  }

  addAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(`${this.baseApiURL}/authors`, author);
  }

  editAuthor(author: Author): Observable<Author> {
    return this.http.put<Author>(
      `${this.baseApiURL}/authors/${author.authorId}`,
      author
    );
  }

  deleteAuthor(authorId: number): Observable<Author> {
    return this.http.delete<Author>(`${this.baseApiURL}/authors/${authorId}`);
  }
}
