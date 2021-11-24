import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserItemComponent } from '../user-item/user-item.component';
import { UserListComponent } from './user-list.component';


const routes: Routes = [ 
  {path: 'users', component: UserListComponent},
  {path: 'user/:id', component: UserItemComponent}
 
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
   exports: [RouterModule]
})



export class UserListRoutingModule { }

