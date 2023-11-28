import { Component } from '@angular/core';
import { Certificate } from '../../../models/Certificate';
import { LearningService } from '../services/learning.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.scss'
})
export class LearningComponent {
  listaTitulos: Certificate[] = []

  constructor(private serviceLearning: LearningService) {
    this.listaTitulos = serviceLearning.certificateList;
  }
}
