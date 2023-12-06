import { Component, Input } from '@angular/core';
import { Work } from '../../../../models/Work.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() language: string = 'es';
  @Input() workList: Work[] = [];

}
