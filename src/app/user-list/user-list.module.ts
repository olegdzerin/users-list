import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from './user-list-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserListSearchComponent } from './user-list-search/user-list-search.component';
import { MatIconModule } from '@angular/material/icon';
import { UserItemComponent } from '../user-item/user-item.component';
import { UserItemSidebarComponent } from '../user-item/user-item-sidebar/user-item-sidebar.component';
import { UserItemBodyComponent } from '../user-item/user-item-body/user-item-body.component';
import { MatCardModule } from '@angular/material/card';
import { UserListService } from './user-list.service';
import { UsersService } from '../users.service';
import { UsersListServiceComponent } from './users-list-sevice.component';


@NgModule({
  declarations: [UserListComponent,
    UserListSearchComponent,
    UserItemSidebarComponent,
    UserItemBodyComponent,
    UserItemComponent,
   // UsersListServiceComponent
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    // RouterModule
    // UserItemComponent
  ],
  // providers: [
  //   {provide: UsersListServiceComponent, useClass: UsersService}
  // ]
})
export class UserListModule { }
