using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShelf.Models
{
    public class Book
    {
        public int BookId { get; set; }
        public string Title { get; set; }
        public int TotalPages { get; set; }
        public int ISBN { get; set; }
        public DateTime PublishedDate { get; set; }
        public Publisher BookPublisher { get; set; }
        public Author BookAuthor { get; set; }
    }
}
