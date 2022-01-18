import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../config/config';
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
    user: User;
    idMap: string;
  
  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    public usersService: UsersService
    
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      data => {
        this.id = data.id;
        const filterArray = this.usersService.getUser().filter((item) => {
          if(item.id === Number(this.id)) return true
        });
        this.user = filterArray[0]
      }
    );
  
  }

}
