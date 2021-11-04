import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningComponent } from './components/learning/learning.component';
import { LearningRoutingModule } from './learning.routes';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LearningComponent
  ],
  imports: [
    CommonModule,
    LearningRoutingModule,
    SharedModule
  ]
})
export class LearningModule { }
