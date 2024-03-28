import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgforComponent } from './concepts/ngfor/ngfor.component';
import { NgifComponent } from './concepts/ngif/ngif.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  {
    path:'ngFor',
    component:NgforComponent,
  },
  {
    path:"ngIf",
    component:NgifComponent,
  },
  {
    path:'practice',
    component:PracticeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
