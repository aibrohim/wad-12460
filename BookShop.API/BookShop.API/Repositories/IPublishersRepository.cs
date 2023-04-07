using BookShop.API.Models;
using System.Collections.Generic;
using System.Security.Policy;

namespace BookShop.API.Repositories
{
    public interface IPublishersRepository
    {
        IEnumerable<Models.Publisher> GetAllPublishers();
        void AddPublisher(Models.Publisher publisher);
        Models.Publisher GetSinglePublisher(int id);
        void UpdatePublisher(Models.Publisher publisher);
        void DeletePublisher(int id);
    }
}
