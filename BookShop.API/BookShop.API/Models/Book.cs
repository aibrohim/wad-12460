using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.API.Models
{
    public class Book
    {
        public int BookId { get; set; }
        public string Title { get; set; }
        public string ISBN { get; set; }
        public int TotalPages { get; set; }
        public bool IsOnStock { get; set; }
        public double Price { get; set; }
        public DateTime PublishedDate { get; set; }
        public int? PublisherId { get; set; }
        public Publisher Publisher { get; set; }
        public IList<BooksAuthors> BooksAuthors { get; set; }
    }
}
