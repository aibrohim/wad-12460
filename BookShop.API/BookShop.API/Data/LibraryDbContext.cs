using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookShop.API.Models;

namespace BookShop.API.Data
{
    public class LibraryDbContext : DbContext
    {
        public LibraryDbContext(DbContextOptions<LibraryDbContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Book> Books { get; set; }
        public DbSet<Publisher> Publishers { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<BooksAuthors> BooksAuthors { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Publisher>().HasData(new Publisher { Id = 1, Name = "Penguin Random House" });
            modelBuilder.Entity<Publisher>().HasData(new Publisher { Id = 2, Name = "Kube Publishing Ltd" });
            modelBuilder.Entity<Author>().HasData(new Author { AuthorId = 1, FirstName = "James", LastName = "Clear"});
            modelBuilder.Entity<Author>().HasData(new Author { AuthorId = 2, FirstName = "Nouman", LastName = "Ali Khan"});
            modelBuilder.Entity<Book>().HasData(new Book { BookId = 1, Title = "Atomic Habits", ISBN = "9783442178582", TotalPages = 271, IsOnStock = true, Price = 30, PublishedDate = new DateTime(2018, 10, 16), PublisherId = 1 });
            modelBuilder.Entity<Book>().HasData(new Book { BookId = 2, Title = "Revive Your Heart: Putting Life in Perspective", ISBN = "1847741010", TotalPages = 192, IsOnStock = true, Price = 15, PublishedDate = new DateTime(2022, 12,12), PublisherId = 2 });
            modelBuilder.Entity<BooksAuthors>().HasData(new BooksAuthors { BookId = 1, AuthorId = 1 });
            modelBuilder.Entity<BooksAuthors>().HasData(new BooksAuthors { BookId = 2, AuthorId = 2 });

            modelBuilder.Entity<BooksAuthors>().HasKey(ba => new { ba.BookId, ba.AuthorId });
            modelBuilder.Entity<BooksAuthors>()
                .HasOne(b => b.Book)
                .WithMany(b => b.BooksAuthors)
                .HasForeignKey(ba => ba.BookId);


            modelBuilder.Entity<BooksAuthors>()
                .HasOne(ba => ba.Author)
                .WithMany(a => a.BooksAuthors)
                .HasForeignKey(ba => ba.AuthorId);
        }

    }
}
