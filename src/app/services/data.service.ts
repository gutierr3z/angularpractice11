import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  colors:string[];
  apiUrl:string = 'http://jsonplaceholder.typicode.com/users';

  constructor( public http:Http ) { 
    this.colors = ['red', 'blue', 'yellow', 'orange'];
  }

  getUsers() {
    return this.http.get( this.apiUrl ).map( res => res.json() );
  }
  
  getColors() {
    return this.colors;
  }

}
