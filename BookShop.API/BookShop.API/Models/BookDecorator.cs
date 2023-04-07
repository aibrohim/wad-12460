using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.API.Models
{
    public abstract class BookDecorator
    {
        private Book _book;

        public BookDecorator (Book book)
        {
            _book = book;
        }

        public int BookId { get { return _book.BookId; } }
        public string Title { get { return _book.Title; } }
        public string ISBN { get { return _book.ISBN; } }
        public int TotalPages { get { return _book.TotalPages; } }
        public bool IsOnStock { get { return _book.IsOnStock; } }
        public double Price { get { return _book.Price; } }
        public DateTime PublishedDate { get { return _book.PublishedDate; } }
        public int? PublisherId { get { return _book.PublisherId; } }
        public Publisher Publisher { get { return _book.Publisher; } }
        public IList<BooksAuthors> BooksAuthors { get { return _book.BooksAuthors; } }
    }
}
