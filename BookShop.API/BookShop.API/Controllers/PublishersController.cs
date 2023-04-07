using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookShop.API.Data;
using BookShop.API.Models;
using BookShop.API.Repositories;
using System.Transactions;

namespace BookShop.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PublishersController : ControllerBase
    {
        private readonly PublishersRepository _repository;

        public PublishersController(LibraryDbContext context)
        {
            _repository = new PublishersRepository (context);
        }

        // GET: api/Publishers
        [HttpGet]
        public IActionResult GetPublishers()
        {
            return new OkObjectResult(_repository.GetAllPublishers());
        }

        // POST: api/Publishers
        [HttpPost]
        public IActionResult PostPublisher([FromBody] Publisher publisher)
        {
            using (var scope = new TransactionScope())
            {
                _repository.AddPublisher(publisher);
                scope.Complete();
                return new OkResult();
            }
        }

        // GET: api/Publishers/5
        [HttpGet("{id}")]
        public IActionResult GetPublisher(int id)
        {
            return new OkObjectResult(_repository.GetSinglePublisher(id));
        }

        // PUT: api/Publishers/5
        [HttpPut("{id}")]
        public IActionResult PutPublisher([FromBody] Publisher publisher)
        {
            if (publisher != null)
            {
                using (var scope = new TransactionScope())
                {
                    _repository.UpdatePublisher(publisher);
                    scope.Complete();
                    return new OkResult();
                }
            }
            return new NoContentResult();
        }

        // DELETE: api/Publishers/5
        [HttpDelete("{id}")]
        public IActionResult DeletePublisher(int id)
        {
            _repository.DetachPublisherBook(id);
            _repository.DeletePublisher(id);
            return new OkResult();
        }
    }
}
