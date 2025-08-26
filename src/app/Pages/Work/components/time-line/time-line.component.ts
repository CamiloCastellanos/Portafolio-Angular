import { Component, Input } from '@angular/core';
import { Work } from '../../../../models/Work.model';

@Component({
    selector: 'app-time-line',
    templateUrl: './time-line.component.html',
    styleUrl: './time-line.component.scss',
    standalone: false
})
export class TimeLineComponent {
  @Input() workList: Work[] = [];
  @Input() language: string = "es";
}
