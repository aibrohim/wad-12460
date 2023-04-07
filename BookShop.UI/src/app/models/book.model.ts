import { BookAuthor } from './book-author.model';
import { Publisher } from './publisher.model';

export interface Book {
  bookId: number;
  title: string;
  isbn: string;
  totalPages: number;
  price: number;
  specialPrice?: number;
  isOnStock: boolean;
  publishedDate: string;
  publisherId: number;
  publisher?: Publisher;
  booksAuthors: BookAuthor[];
}
