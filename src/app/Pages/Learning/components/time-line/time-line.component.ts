import { Component, Input } from '@angular/core';
import { Learning } from '../../../../models/Learning.model';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrl: './time-line.component.scss'
})
export class TimeLineComponent {
 @Input() certificateList: Learning[] = []
}
