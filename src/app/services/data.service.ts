import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { User } from '../components/main/user';

@Injectable()
export class DataService {

  colors:string[];
  apiUrl:string = 'http://jsonplaceholder.typicode.com/users';

  constructor( public http:Http ) { 
    this.colors = ['red', 'blue', 'yellow', 'orange'];
  }

  getUsers() {

    // return this.http.get( this.apiUrl ).map( res => res.json() );

    return this.http.get( this.apiUrl )
      .toPromise()
      .then( res => {
        return <User[]> res.json();
       })
      .then( data => { 
        return data } );
  }

  getColors() {
    return this.colors;
  }

}











