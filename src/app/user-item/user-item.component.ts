import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
    id: string;
    user: any;
    idMap: string;
    tiles1: Tile[] = [
      {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
      {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
      {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];
    tiles: Tile[] = [
      {text: `<app-user-item-sidebar></app-user-item-sidebar>`,
       cols: 2, rows: 3, color: 'lightblue'},
      {text: 'Two', cols: 4, rows: 3, color: 'lightgreen'},
    
    ];
  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    public usersService: UsersService
    
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      data => {
        this.id = data.id;
        this.user = this.usersService.getUser().filter((item) => {
          if(item.id === Number(this.id)) return true
        });
        console.log(this.user[0]);
      }
    );
  
  }

}
