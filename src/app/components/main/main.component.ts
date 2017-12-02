import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  colors:string[];
  users:string[];

  constructor( public dataService:DataService ) { 
    this.colors = this.dataService.getColors();

    this.dataService.getUsers().subscribe( users => {
      console.log( users );
      this.users = users;
    });
  }

  ngOnInit() {
  }

}
