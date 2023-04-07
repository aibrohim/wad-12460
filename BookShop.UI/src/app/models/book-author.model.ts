import { Author } from './Author.model';

export interface BookAuthor {
  bookId: number;
  authorId: number;
  author: Author;
}
