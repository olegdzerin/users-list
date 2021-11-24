import { Component, OnInit, OnChanges } from '@angular/core';
import { User } from '../config/config';
import { UsersService } from '../users.service';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
   title = 'Users list';
   users: User[] ;
   special = false;
   settM;
   value = '';
   valueFind = '';
    disableSelect = new FormControl();
    
   
  constructor( public usersService: UsersService,
      public router: Router) { }
 
  ngOnInit(): void {
     this.users = this.usersService.getUser();
    console.log(this.disableSelect.value);
    
  };
  ngOnChange(): void {
  // this.users = this.usersService.getUser();
  }
   search(){

   };
    
   filter(data){
      // console.log(e.target.value);
      // let data = e.target.value;
       this.usersService.filterHandler(data);
       this.users = this.usersService.getUser();
   }
   nameIncrease(arg) { 
      this.usersService.nameIncrease(arg)
   }
    
   ageIncrease(arg){
      this.usersService.ageIncrease(arg);
      this.users = this.usersService.getUser();
    }
   addItem(){
     return "add"
   }
    ///its fn for experiment
   settingsMenuFn(){
      console.log(this.settM._elementRef.nativeElement);
      console.log(this.settM._elementRef.nativeElement.firstElementChild);
    // this.settM._elementRef.nativeElement.addEventListener('click',(e) => console.log(e.currentTarget, e.target));
   //    console.log(this.settM.getElementsByTagName('div'));
   //   console.log(this.settM.getElementsByTagName('div')['child-el']);
   //   console.log(this.settM.getElementsByTagName('div')[0].getAttribute('id'));
   }
   updateUsers(){
      this.usersService.updateUsersList();
      this.users = this.usersService.getUser();
   };
   nav(){
     this.router.navigate(['doc'])
   }
}
