import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningRoutingModule } from './learning.routes';
import { TranslateModule } from '@ngx-translate/core';
import { LearningComponent } from './learning/learning.component';
import { TimeLineComponent } from './components/time-line/time-line.component';

@NgModule({
  declarations: [LearningComponent, TimeLineComponent],
  imports: [
    CommonModule,
    LearningRoutingModule,
    TranslateModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LearningModule { }
