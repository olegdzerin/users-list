import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user-item-sidebar',
  templateUrl: './user-item-sidebar.component.html',
  styleUrls: ['./user-item-sidebar.component.css']
})
export class UserItemSidebarComponent implements OnInit {
    @Input() id;
    @Input() user;
  constructor() { }
    
  ngOnInit(): void {

  }

}
