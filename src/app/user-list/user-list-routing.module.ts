import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list.component';


const routes: Routes = [ 
  {path: 'users', component: UserListComponent


},

 
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ]
})



export class UserListRoutingModule { }

