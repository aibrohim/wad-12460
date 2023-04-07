import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookAuthor } from '../models/book-author.model';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  baseApiURL: string = environment.baseApiUrl;
  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseApiURL}/books`);
  }

  getSingleBook(bookId: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseApiURL}/books/${bookId}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.baseApiURL}/books`, book);
  }

  editBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.baseApiURL}/books/${book.bookId}`, book);
  }

  deleteBook(bookId: number): Observable<Book> {
    return this.http.delete<Book>(`${this.baseApiURL}/books/${bookId}`);
  }

  attachAuthor(bookId: number, authorId: number): Observable<BookAuthor> {
    return this.http.post<BookAuthor>(
      `${this.baseApiURL}/books/${bookId}/authors/${authorId}`,
      {}
    );
  }

  detachAuthor(bookId: number, authorId: number): Observable<BookAuthor> {
    return this.http.delete<BookAuthor>(
      `${this.baseApiURL}/books/${bookId}/authors/${authorId}`
    );
  }

  getBookSpecialPrice(bookId: number): Observable<number> {
    return this.http.get<number>(
      `${this.baseApiURL}/books/special-offer/${bookId}/`
    );
  }
}
