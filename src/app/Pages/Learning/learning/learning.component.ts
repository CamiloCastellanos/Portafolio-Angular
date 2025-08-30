import { Component } from '@angular/core';
import { Certificate } from '../../../models/certificate';
import { LearningService } from '../services/learning.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TimeLineComponent } from '../components/time-line/time-line.component';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    TimeLineComponent
  ]
})
export default class LearningComponent {
  certificateList: Certificate[] = []

  constructor(private serviceLearning: LearningService) {
    this.certificateList = serviceLearning.certificateList;
  }
}
