import { Injectable } from '@angular/core';
import { Learning } from '../../models/Learning.model';

@Injectable({
  providedIn: 'root'
})
export class LearningService {

  listaTitulos: Learning[] = [];

  constructor() {
    this.cargarAprendiendo();
  }

  cargarAprendiendo() {
    let learningJSON = {
      "aprendiendo": [
        {
          "titulo": "Curso de MongoDB Aprende bases de datos NoSQL + API NodeJS",
          "imagen": "https://i.postimg.cc/Xv3GrTC1/Curso-Mongo.jpg"
        },
        {
          "titulo": "Matemáticas Aplicadas a la Ciencia de Datos",
          "imagen": "https://i.postimg.cc/rw5RF8Kt/Matem-ticas-Aplicadas-a-la-Ciencia-de-Datos-pages-to-jpg-0001.jpg"
        },
        {
          "titulo": "Fundamentos de Typescript",
          "imagen": "https://i.postimg.cc/X7kptbQB/diploma-fundamentos-typescript.jpg"
        },
        {
          "titulo": "Curso Profesional de Git y GitHub",
          "imagen": "https://i.postimg.cc/7YL1yZ5n/diploma-git-github.jpg"
        },
        {
          "titulo": "Markdown Desde Cero",
          "imagen": "https://i.postimg.cc/ZRKnyCtf/certificado-curso-markdown.png"
        },
        {
          "titulo": "Aprende Typescript",
          "imagen": "https://i.postimg.cc/SKXz2sB7/Aprende-Type-Script.jpg"
        }
      ]
    }

    for (const item in learningJSON.aprendiendo) {
      let titulo = new Learning();
      titulo.titulo = learningJSON.aprendiendo[item].titulo;
      titulo.imagen = learningJSON.aprendiendo[item].imagen;
      this.listaTitulos.push(titulo);
    }

  }
}
