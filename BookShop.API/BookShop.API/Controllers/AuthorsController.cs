using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Transactions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookShop.API.Data;
using BookShop.API.Models;
using BookShop.API.Repositories;

namespace BookShop.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorsController : ControllerBase
    {
        private readonly AuthorsRepository __authorsRepository;

        public AuthorsController(LibraryDbContext context)
        {
            __authorsRepository = new AuthorsRepository(context);
        }
        // GET: api/Authors
        [HttpGet]
        public IActionResult GetAuthors()
        {
            return new OkObjectResult(__authorsRepository.GetAllAuthors());
        }

        // POST: api/Authors
        [HttpPost]
        public IActionResult PostAuthor([FromBody] Author author)
        {
            using (var scope = new TransactionScope())
            {
                __authorsRepository.AddAuthor(author);
                scope.Complete();
                return new OkResult();
            }
        }

        // GET: api/Authors/5
        [HttpGet("{id}")]
        public IActionResult GetAuthor(int id)
        {
            return new OkObjectResult(__authorsRepository.GetSingleAuthor(id));
        }

        // PUT: api/Authors/5
        [HttpPut("{id}")]
        public IActionResult PutAuthor([FromBody] Author author)
        {
            if (author != null)
            {
                using (var scope = new TransactionScope())
                {
                    __authorsRepository.UpdateAuthor(author);
                    scope.Complete();
                    return new OkResult();
                }
            }
            return new NoContentResult();
        }

        // DELETE: api/Authors/5
        [HttpDelete("{id}")]
        public IActionResult DeleteAuthor(int id)
        {
            __authorsRepository.DeleteAuthor(id);
            return new OkResult();
        }
    }
}
