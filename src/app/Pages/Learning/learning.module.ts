import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningComponent } from './components/learning/learning.component';
import { LearningRoutingModule } from './learning.routes';

@NgModule({
  declarations: [
    LearningComponent
  ],
  imports: [
    CommonModule,
    LearningRoutingModule
  ]
})
export class LearningModule { }
