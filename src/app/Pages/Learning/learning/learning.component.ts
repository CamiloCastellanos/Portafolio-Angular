import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Certificate } from '../../../models/certificate';
import { LearningService } from '../services/learning.service';
import { LearningDesktopComponent } from '../components/learning-desktop/learning-desktop.component';
import { LearningMobileComponent } from '../components/learning-mobile/learning-mobile.component';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    LearningDesktopComponent,
    LearningMobileComponent
  ]
})
export default class LearningComponent {
  certificateList: Certificate[] = []

  constructor(private serviceLearning: LearningService) {
    this.certificateList = serviceLearning.certificateList;
  }
}
