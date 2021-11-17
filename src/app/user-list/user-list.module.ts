import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from './user-list-routing.module';
import {MatListModule} from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu'; 
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UserListRoutingModule,
  MatListModule,
  MatMenuModule,
  MatInputModule,
  FormsModule
  ]
})
export class UserListModule { }
