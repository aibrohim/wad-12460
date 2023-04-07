import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { FormsModule } from '@angular/forms';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { AddButtonsComponent } from './books/add-buttons/add-buttons.component';
import { EditButtonsComponent } from './books/edit-buttons/edit-buttons.component';
import { SingleBookComponent } from './books/single-book/single-book.component';
import { AttachAuthorComponent } from './books/attach-author/attach-author.component';
import { PublishersListComponent } from './publishers/publishers-list/publishers-list.component';
import { AddPublisherComponent } from './publishers/add-publisher/add-publisher.component';
import { PublisherFormComponent } from './publishers/publisher-form/publisher-form.component';
import { EditPublisherComponent } from './publishers/edit-publisher/edit-publisher.component';
import { PublisherEditBtnsComponent } from './publishers/publisher-edit-btns/publisher-edit-btns.component';
import { AuthorsListComponent } from './authors/authors-list/authors-list.component';
import { AddAuthorComponent } from './authors/add-author/add-author.component';
import { EditAuthorComponent } from './authors/edit-author/edit-author.component';
import { EditAuthorBtnsComponent } from './authors/edit-author-btns/edit-author-btns.component';
import { AuthorFormComponent } from './authors/author-form/author-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    AddBookComponent,
    BookFormComponent,
    EditBookComponent,
    AddButtonsComponent,
    EditButtonsComponent,
    SingleBookComponent,
    AttachAuthorComponent,
    PublishersListComponent,
    AddPublisherComponent,
    PublisherFormComponent,
    EditPublisherComponent,
    PublisherEditBtnsComponent,
    AuthorsListComponent,
    AddAuthorComponent,
    EditAuthorComponent,
    EditAuthorBtnsComponent,
    AuthorFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
