import { Component, Input } from '@angular/core';
import { Certificate } from '../../../../models/Certificate';

@Component({
    selector: 'app-time-line',
    templateUrl: './time-line.component.html',
    styleUrl: './time-line.component.scss',
    standalone: true,
})
export class TimeLineComponent {
  @Input() certificateList: Certificate[] = []
}
