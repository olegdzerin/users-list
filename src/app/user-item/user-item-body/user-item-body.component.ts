import { Component, forwardRef, Inject, Injector, OnInit } from '@angular/core';
import { AppConfig, APP_CONFIG, APP_CONFIG_NEW} from 'src/app/config/app.config';
import { User } from 'src/app/config/config';
import { UserListService } from 'src/app/user-list/user-list.service';
import { UsersListServiceComponent } from 'src/app/user-list/users-list-sevice.component';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user-item-body',
  templateUrl: './user-item-body.component.html',
  styleUrls: ['./user-item-body.component.css'],
  providers: [
   // {provide: UserListService, useClass: UsersService},
   
   {provide: UsersListServiceComponent, useClass: UsersService}
  ]
})
export class UserItemBodyComponent implements OnInit {
   usersList: User[];
   users: User[];
   title1: string = 'undefind';
   title2: string ='undefind';
   titleDecorator: any;
   titleWithoutDI;
  constructor( private injector: Injector,
      @Inject(APP_CONFIG_NEW) config: AppConfig,
    private usersListServiceComponent: UsersListServiceComponent) { 
      this.titleDecorator = config.title
    }

  ngOnInit(): void {
    this.users = this.injector.get(UsersService).getUser();
    this.usersList = this.usersListServiceComponent.getUser()
    this.title1 = this.injector.get(APP_CONFIG, 'not found value').title;
    this.title2 = this.injector.get(APP_CONFIG_NEW, 'not found value').title;
     this.titleWithoutDI = APP_CONFIG.title;
     console.log(APP_CONFIG.title);
  }

}
