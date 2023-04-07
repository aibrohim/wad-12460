using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Policy;
using BookShop.API.Data;
using BookShop.API.Models;
using Microsoft.EntityFrameworkCore;

namespace BookShop.API.Repositories
{
    public class PublishersRepository : IPublishersRepository
    {
        private readonly LibraryDbContext __dbContext;

        public PublishersRepository(LibraryDbContext context)
        {
            __dbContext = context;
        }
        public IEnumerable<Models.Publisher> GetAllPublishers()
        {
            return __dbContext.Publishers.ToList();
        }
        public void Save()
        {
            __dbContext.SaveChanges();
        }

        public void AddPublisher(Models.Publisher publisher)
        {
            __dbContext.Publishers.Add(publisher);
            Save();
        }

        public Models.Publisher GetSinglePublisher(int id)
        {
            return __dbContext.Publishers.Find(id);
        }

        public void UpdatePublisher(Models.Publisher publisher)
        {
            __dbContext.Entry(publisher).State = EntityState.Modified;
            Save();
        }

        public void DeletePublisher(int id)
        {
            __dbContext.Publishers.Remove(new Models.Publisher { Id = id });

            Save();
        }

        public void DetachPublisherBook(int id)
        {
            __dbContext.Books.Where(b => b.PublisherId == id).ToList().ForEach(b =>
            {
                b.Publisher = null;
            });
            Save();
        }
    }
}
