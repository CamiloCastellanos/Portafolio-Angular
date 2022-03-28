import { Injectable } from '@angular/core';
import { Learning } from '../../models/Learning.model';
import learningJSON from '../../../assets/JSON/Learning.json';
@Injectable({
  providedIn: 'root'
})
export class LearningService {

  listaTitulos: Learning[] = [];

  constructor() {
    this.cargarAprendiendo();
  }

  /**
   * Lista de Certificados
   */
  cargarAprendiendo() {

    for (const item in learningJSON.aprendiendo) {
      let titulo = new Learning();
      titulo.titulo = learningJSON.aprendiendo[item].titulo;
      titulo.imagen = learningJSON.aprendiendo[item].imagen;
      this.listaTitulos.push(titulo);
    }

  }
}
