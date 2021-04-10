import { Injectable } from '@angular/core';
import { ToolsLanguages } from '../models/ToolsLanguages.model';

@Injectable({
  providedIn: 'root'
})
export class ToolsLanguagesService {

  listaHerramientas:ToolsLanguages[]=[];

  constructor() {
    this.cargarHerramientas();
  }

cargarHerramientas(){
  let learningJSON = {
    "aprendiendo": [
      {
        "nombre": "Github",
        "imagen": "https://i.postimg.cc/mry0D2wh/GitHub.png",
        "estado":0
      },
      {
        "nombre": "Angular",
        "imagen": "https://i.postimg.cc/xjPsq2Nh/angular.png",
        "estado":0
      },
      {
        "nombre": "Colab",
        "imagen": "https://i.postimg.cc/4yXBw8qW/colab.png",
        "estado":0
      },
      {
        "nombre": "C#",
        "imagen": "https://i.postimg.cc/TYYtD4rw/Csharp.png",
        "estado":0
      },
      {
        "nombre": "Ionic",
        "imagen": "https://i.postimg.cc/TY7CqJ9c/ionic.png",
        "estado":0
      },
      {
        "nombre": "MongoDB",
        "imagen": "https://i.postimg.cc/7Z5XBJtr/mongo.png",
        "estado":0
      },
      {
        "nombre": "Node JS",
        "imagen": "https://i.postimg.cc/7L7948yB/nodejs.png",
        "estado":0
      },
      {
        "nombre": "Python",
        "imagen": "https://i.postimg.cc/FRVxfyz3/python.png",
        "estado":0
      },
      {
        "nombre": "Bulma CSS",
        "imagen": "https://i.postimg.cc/T1QQsVXf/bulmacss.png",
        "estado":0
      }
      // {
      //   "nombre": "",
      //   "imagen": "",
      //   "estado":0
      // }
    ]
  }

  for (const item in learningJSON.aprendiendo) {
    let herramienta = new ToolsLanguages();
    herramienta.nombre = learningJSON.aprendiendo[item].nombre;
    herramienta.imagen = learningJSON.aprendiendo[item].imagen;
    this.listaHerramientas.push(herramienta);
  }
}


}
