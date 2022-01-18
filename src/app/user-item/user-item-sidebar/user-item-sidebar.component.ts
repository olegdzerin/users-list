import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl, Validator, Validators } from '@angular/forms';
import { User } from 'src/app/config/config';
import { UserListModule } from 'src/app/user-list/user-list.module';
import { UsersService } from 'src/app/users.service';
import { ValidatorFn, ValFn } from 'src/app/config/config';

@Component({
  selector: 'app-user-item-sidebar',
  templateUrl: './user-item-sidebar.component.html',
  styleUrls: ['./user-item-sidebar.component.css']
})
export class UserItemSidebarComponent implements OnInit {
    @Input() id:number;
    @Input() user: User;
  constructor(private usersService: UsersService) { }
  validator(controle: AbstractControl): any{
   // console.log( 'contr' + controle.value);
    if(typeof(controle.value === '1111')) return null ;
    return {'err': 'Введіть правельн текст'}
  }
  control: FormControl
  ngOnInit(): void {
    this.control = new FormControl('h', Validators.minLength(4));
   // console.log(this.mainFn(this.myFn));
   const val:ValidatorFn = Validators.minLength(0);
   console.log(val(this.control));
   console.log(this.control);
  };
  // myFn(arg:string): Number{
  //    return Number(arg)
  // };
  // mainFn(callback: ValFn){
  //   return callback('45')
      
      
  // }
  
  changingPhoneNumber(){
    this.usersService.usersList.forEach((item, index) => {
      if(item.id === this.user.id) {
        item.phone = this.user.phone;
        // this.usersService.updateUsersList();
        return false;
      }
    });
  };
  formControlValueFn(){
 
  
    console.log(this.control);
  }

}
