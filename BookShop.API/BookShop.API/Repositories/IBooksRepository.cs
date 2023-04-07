using System.Collections;
using System.Collections.Generic;
using BookShop.API.Models;

namespace BookShop.API.Repositories
{
    public interface IBooksRepository
    {
        IEnumerable<Book> GetAllBooks();
        Book GetSingleBook(int id);
        void AddBook(Book book);
        void UpdateBook(Book book);
        void DeleteBook(int id);
        IEnumerable<Author> GetBookAuthors(int bookId);
        void AttachBookAuthor(int bookId, int authorId);
        void DetachBookAuthor(int bookId, int authorId);
    }
}
