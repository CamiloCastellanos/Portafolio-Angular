import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { LearningComponent } from './components/learning/learning.component';

const PLEARNING_ROUTES: Routes = [
    { path: 'seguirAprendiendo', component: LearningComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(PLEARNING_ROUTES)
  ],
  exports: [
    RouterModule
  ]

})

export class LearningRoutingModule{}
