using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using BookShop.API.Data;
using BookShop.API.Models;

namespace BookShop.API.Repositories
{
    public class AuthorsRepository : IAuthorsRepository
    {
        private readonly LibraryDbContext __dbContext;

        public AuthorsRepository(LibraryDbContext context)
        {
            __dbContext = context;
        }
        public void Save()
        {
            __dbContext.SaveChanges();
        }
        public IEnumerable<Author> GetAllAuthors()
        {
            return __dbContext.Authors.ToList();
        }

        public void AddAuthor(Author author)
        {
            __dbContext.Authors.Add(author);
            Save();
        }

        public Author GetSingleAuthor(int id)
        {
            return __dbContext.Authors.Find(id);
        }

        public void UpdateAuthor(Author author)
        {
            __dbContext.Entry(author).State = EntityState.Modified;
            Save();
        }

        public void DeleteAuthor(int id)
        {
            var foundAuthor = __dbContext.Authors.Find(id);
            __dbContext.Authors.Remove(foundAuthor);

            var foundBookAuthor = __dbContext.BooksAuthors.Where(ba => ba.AuthorId == id);
            __dbContext.BooksAuthors.RemoveRange(foundBookAuthor);

            Save();
        }
    }
}
