import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string;
  names = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.name.subscribe(res => this.names = res)
    this._data.changeName(this.names);
  }

  addName() {
    this.names.push(this.name);
    this._data.changeName(this.names);
  }

}
