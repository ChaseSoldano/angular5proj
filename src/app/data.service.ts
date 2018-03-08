import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private books = new BehaviorSubject<any>([]);
  book = this.books.asObservable();

  private names = new BehaviorSubject<any>([]);
  name = this.names.asObservable();



  constructor() { }
  changeName(name) {
    this.names.next(name);
  }
  changeBook(book) {
    this.books.next(book);
  }

}
