import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  book: any;
  books = [];
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.book.subscribe(res => this.books = res)



  }
  addBook() {
    this.books.push(this.book);
    this.book = '';

  }
}
