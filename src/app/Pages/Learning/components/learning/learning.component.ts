import { Component, OnInit } from '@angular/core';
import { Learning } from '../../../../models/Learning.model';
import { LearningService } from '../../../../core/services/learning.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {

  listaTitulos: Learning[] = []


  constructor() {
    let serviceLearning: LearningService = new LearningService();
    this.listaTitulos = serviceLearning.listaTitulos;
  }

  ngOnInit(): void {
  }

}
