import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { User } from './user';

import {Header} from 'primeng/primeng';
import {Footer} from 'primeng/primeng';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  colors:any[];
  users:User[];
  cols: any[];

  constructor( private dataService:DataService ) { 
    this.colors = this.dataService.getColors();

    // this.dataService.getUsers().subscribe( users => {
    //   console.log( users );
    //   this.users = users;
    // });
  }

  ngOnInit() {
    
    this.dataService.getUsers().then( usersx => this.users = usersx );

    this.cols = [
      {field: 'id', header: 'ID'},
      {field: 'name', header: 'Name'},
      {field: 'email', header: 'Email'}
    ];

  }

}
