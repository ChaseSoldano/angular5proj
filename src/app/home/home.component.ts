import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  names = [];
  name: any;
  BookCount: number;
  book: any;
  books = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.book.subscribe(res => this.books = res);
    this._data.name.subscribe(res => this.names = res);
    this.BookCount = this.books.length;



  }
  addBook() {
    this.books.push(this.book);
    this.book = '';
    this.BookCount = this.books.length;
    this._data.changeBook(this.books)
  }
  removeBook(i) {
    this.books.splice(i, 1);
    this.BookCount = this.books.length;
  }
  removeName(i) {
    this.names.splice(i, 1)
    this._data.changeName(this.names);
  }
}
