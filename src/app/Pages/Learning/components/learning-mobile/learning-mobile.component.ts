import { Component, Input } from '@angular/core';
import { Certificate } from '../../../../models/certificate';
import { TimeLineComponent } from '../time-line/time-line.component';

@Component({
  selector: 'app-learning-mobile',
  standalone: true,
  templateUrl: './learning-mobile.component.html',
  styleUrl: './learning-mobile.component.scss',
  imports: [TimeLineComponent,]
})
export class LearningMobileComponent {
  @Input() certificateList: Certificate[] = []
}
