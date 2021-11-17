import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngMatComponent } from './ang-mat/ang-mat.component';
import { DocComponent } from './doc/doc.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [ 
  {path: '', component: MainComponent},
  {path: 'doc', component: DocComponent},
  {path: 'ang-mat', component: AngMatComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
