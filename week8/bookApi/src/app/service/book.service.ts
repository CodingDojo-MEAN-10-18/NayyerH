import { BOOKS } from './../data/book-data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {of , Observable} from 'rxjs';
import {Book} from '../models';


@Injectable({
  providedIn: 'root'
})
export class BookService {
    // private base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';
   private readonly base = '/api/books';

  constructor(private readonly http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.base);
  }
  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.base, book);
  }
  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.base}/${book._id}`, book); // how to reach the resource
  }
  removeBook(id: string): Observable<Book> {
    return this.http.delete<Book>(`${this.base}/${id}`);
  }
  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.base}/${id}`);
  }
}
