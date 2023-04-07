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
    public class BooksController : ControllerBase
    {
        private readonly BooksRepository __booksRepository;

        public BooksController(LibraryDbContext context)
        {
            __booksRepository = new BooksRepository(context);
        }
        public IActionResult Get()
        {
            return new OkObjectResult(__booksRepository.GetAllBooks());
        }

        // GET: api/Books
        [HttpGet]
        public IActionResult GetBooks()
        {
            return Get();
        }

        // GET: api/Books/5
        [HttpGet("{id}")]
        public IActionResult GetBook(int id)
        {
            return new OkObjectResult(__booksRepository.GetSingleBook(id));
        }

        [HttpGet("special-offer/{id}")]
        public IActionResult GetBookSpecialOffer(int id)
        {
            Book foundBook = __booksRepository.GetSingleBook(id);
            return new OkObjectResult(new SpecialOffer(foundBook).PriceInDiscount);
        }

        // PUT: api/Books/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public IActionResult PutBook([FromBody] Book book)
        {
            if (book != null)
            {
                using (var scope = new TransactionScope())
                {
                    __booksRepository.UpdateBook(book);
                    scope.Complete();
                    return new OkResult();
                }
            }
            return new NoContentResult();
        }

        // POST: api/Books
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public IActionResult PostBook([FromBody] Book book)
        {
            using (var scope = new TransactionScope())
            {
                __booksRepository.AddBook(book);
                scope.Complete();
                return CreatedAtAction(nameof(Get), new { ID = book.BookId }, book);
            }
        }

        // DELETE: api/Books/5
        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id)
        {
            __booksRepository.DeleteBook(id);
            return new OkResult();
        }

        // GET: api/books/5/authors/
        [HttpGet("{id}/authors")]
        public IActionResult GetBookAuthors(int id)
        {
            return new OkObjectResult(__booksRepository.GetBookAuthors(id));
        }

        // POST: api/books/1/authors/1
        [HttpPost("{bookId}/authors/{authorId}")]
        public IActionResult AttachBookAuthor(int bookId, int authorId)
        {
            using (var scope = new TransactionScope())
            {
                __booksRepository.AttachBookAuthor(bookId, authorId);
                var res = CreatedAtAction(nameof(Get), new { ID = bookId }, __booksRepository.GetBookAuthor(bookId, authorId));
                scope.Complete();
                return res;
            }
        }

        // DELETE: api/books/1/authors/1
        [HttpDelete("{bookId}/authors/{authorId}")]
        public IActionResult DetachBookAuthor(int bookId, int authorId)
        {
            __booksRepository.DetachBookAuthor(bookId, authorId);
            return new OkResult();
        }
    }
}
