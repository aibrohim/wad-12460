import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './books/add-book/add-book.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { SingleBookComponent } from './books/single-book/single-book.component';
import { AddPublisherComponent } from './publishers/add-publisher/add-publisher.component';
import { EditPublisherComponent } from './publishers/edit-publisher/edit-publisher.component';
import { PublishersListComponent } from './publishers/publishers-list/publishers-list.component';
import { AuthorsListComponent } from './authors/authors-list/authors-list.component';
import { AddAuthorComponent } from './authors/add-author/add-author.component';
import { EditAuthorComponent } from './authors/edit-author/edit-author.component';

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent,
  },
  {
    path: 'books',
    component: BooksListComponent,
  },
  {
    path: 'add-book',
    component: AddBookComponent,
  },
  {
    path: 'book/:id',
    component: SingleBookComponent,
  },
  {
    path: 'edit-book/:id',
    component: EditBookComponent,
  },
  {
    path: 'publishers',
    component: PublishersListComponent,
  },
  {
    path: 'add-publisher',
    component: AddPublisherComponent,
  },
  {
    path: 'edit-publisher/:id',
    component: EditPublisherComponent,
  },
  {
    path: 'authors',
    component: AuthorsListComponent,
  },
  {
    path: 'add-author',
    component: AddAuthorComponent,
  },
  {
    path: 'edit-author/:id',
    component: EditAuthorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
