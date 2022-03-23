import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningComponent } from './components/learning/learning.component';
import { LearningRoutingModule } from './learning.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { MzdTimelineModule } from 'ngx-mzd-timeline';

@NgModule({
  declarations: [
    LearningComponent
  ],
  imports: [
    CommonModule,
    LearningRoutingModule,
    SharedModule,
    MzdTimelineModule
  ]
})
export class LearningModule { }
