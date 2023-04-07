using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using BookShop.API.Data;
using BookShop.API.Models;
using BookShop.API.Controllers;

namespace BookShop.API.Repositories
{
    public class BooksRepository : IBooksRepository
    {
        private readonly LibraryDbContext __dbContext;

        public BooksRepository(LibraryDbContext context)
        {
            __dbContext = context;
        }
        public void Save()
        {
            __dbContext.SaveChanges();
        }
        public IEnumerable<Book> GetAllBooks()
        {
            return __dbContext.Books.Include(b => b.Publisher).Include(b => b.BooksAuthors).ThenInclude(ba => ba.Author).ToList();
        }

        public Book GetSingleBook(int id)
        {
            Book foundBook = __dbContext.Books.Where(b => b.BookId == id).Include(b => b.Publisher).Include(b => b.BooksAuthors).ThenInclude(ba => ba.Author).FirstOrDefault();

            return foundBook;
        }
        public void AddBook(Book book)
        {
            __dbContext.Add(book);
            Save();
        }
        public void UpdateBook(Book book)
        {
            __dbContext.Entry(book).State = EntityState.Modified;
            Save();
        }

        public void DeleteBook(int id)
        {
            var foundBook = __dbContext.Books.Find(id);
            __dbContext.Books.Remove(foundBook);
            Save();
        }

        public void AddBookAuthor(int bookId, int authorId)
        {
            __dbContext.BooksAuthors.Add(new BooksAuthors { BookId = bookId, AuthorId = authorId });
        }

        public void DeleteBookAuthor(int bookId, int authorId)
        {
            var foundBookAuthor = __dbContext.BooksAuthors.Where(ba => ba.BookId == bookId);
            __dbContext.BooksAuthors.RemoveRange(foundBookAuthor);

            __dbContext.BooksAuthors.Remove(new BooksAuthors { BookId = bookId, AuthorId = authorId });
        }

        public IEnumerable<Author> GetBookAuthors(int bookId)
        {
            return __dbContext.BooksAuthors.Where(ba => ba.BookId == bookId).Include(ba => ba.Author).Select(ba => ba.Author);
        }
        public BooksAuthors GetBookAuthor(int bookId, int authorId)
        {
            return __dbContext.BooksAuthors.Where(ba => ba.BookId == bookId && ba.AuthorId == authorId).Include(ba => ba.Author).FirstOrDefault();
        }
        public void AttachBookAuthor(int bookId, int authorId)
        {
            __dbContext.BooksAuthors.Add(new BooksAuthors
            {
                BookId = bookId,
                AuthorId = authorId
            });
            Save();
        }

        public void DetachBookAuthor(int bookId, int authorId)
        {
            BooksAuthors foundItem = __dbContext.BooksAuthors.Where(ba => ba.BookId == bookId && ba.AuthorId == authorId).FirstOrDefault();
            __dbContext.BooksAuthors.Remove(foundItem);
            Save();
        }
    }
}
