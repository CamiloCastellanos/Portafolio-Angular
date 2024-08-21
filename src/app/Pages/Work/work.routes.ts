import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: 'trabajos', component: WorkComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class WorkRoutingModule { }
