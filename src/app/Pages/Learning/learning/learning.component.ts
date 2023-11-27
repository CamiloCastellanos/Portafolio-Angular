import { Component } from '@angular/core';
import { Learning } from '../../../models/Learning.model';
import { LearningService } from '../services/learning.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.scss'
})
export class LearningComponent {
  listaTitulos: Learning[] = []
  
  constructor(private serviceLearning: LearningService) {
    this.listaTitulos = serviceLearning.listaTitulos;
  }
}
