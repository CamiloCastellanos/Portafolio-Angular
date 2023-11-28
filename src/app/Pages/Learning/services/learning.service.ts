import { Injectable } from '@angular/core';
import learningJSON from '../../../../assets/JSON/Learning.json';
import { Certificate } from '../../../models/Certificate';

@Injectable({
  providedIn: 'root'
})
export class LearningService {

  certificateList: Certificate[] = [];

  constructor() {
    this.getCertificate();
  }

  getCertificate() {
    this.certificateList = learningJSON.aprendiendo as Certificate[];
  }
}
