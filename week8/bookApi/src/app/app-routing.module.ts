import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromBooks from './books';

const routes: Routes = [
  {
    path: '',
    component: fromBooks.BookListComponent,
  },
  {
    path: 'books/new',
    component: fromBooks.BookNewComponent
  },
  {
    path: 'books/:book_id',
    component: fromBooks.BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {

}
