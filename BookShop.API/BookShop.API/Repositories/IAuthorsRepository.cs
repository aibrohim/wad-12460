using BookShop.API.Models;
using System.Collections.Generic;

namespace BookShop.API.Repositories
{
    public interface IAuthorsRepository
    {
        IEnumerable<Author> GetAllAuthors();
        void AddAuthor(Author author);
        Author GetSingleAuthor(int id);
        void UpdateAuthor(Author author);
        void DeleteAuthor(int id);

    }
}
