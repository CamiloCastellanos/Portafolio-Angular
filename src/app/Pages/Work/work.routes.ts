import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { WorkComponent } from './components/work/work.component';

const WORK_ROUTES: Routes = [
    { path: 'trabajos', component: WorkComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(WORK_ROUTES)
  ],
  exports: [
    RouterModule
  ]

})

export class WorkRoutingModule{}
