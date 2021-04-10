import { Injectable } from '@angular/core';
import { ToolsLanguages } from '../models/ToolsLanguages.model';

@Injectable({
  providedIn: 'root'
})
export class ToolsLanguagesService {

  listaHerramientas: ToolsLanguages[] = [];

  constructor() {
    this.cargarHerramientas();
  }

  cargarHerramientas() {
    let learningJSON = {
      "aprendiendo": [
        {
          "nombre": ".NET",
          "imagen": "https://i.postimg.cc/k4wcJqjN/net.png",
          "estado": 2
        },
        {
          "nombre": "C#",
          "imagen": "https://i.postimg.cc/6qyyjjcK/CSharp.png",
          "estado": 2
        },
        {
          "nombre": "Github",
          "imagen": "https://i.postimg.cc/mry0D2wh/GitHub.png",
          "estado": 2
        },
        {
          "nombre": "Angular",
          "imagen": "https://i.postimg.cc/xjPsq2Nh/angular.png",
          "estado": 2
        },
        {
          "nombre": "SQL Server",
          "imagen": "https://i.postimg.cc/3JpHwqT4/SQLServer.png",
          "estado":2
        },
        {
          "nombre": "Visual Studio",
          "imagen": "https://i.postimg.cc/T1GyhD4B/Visual-Studio.png",
          "estado":2
        },
        {
          "nombre": "Visual Studio Code",
          "imagen": "https://i.postimg.cc/Prk2HVr5/Visual-Studio-Code.png",
          "estado":2
        },
        {
          "nombre": "Power BI",
          "imagen": "https://i.postimg.cc/Pf0jTjBn/PowerBi.png",
          "estado":2
        },
        {
          "nombre": "Oracle SQL",
          "imagen": "https://i.postimg.cc/MH6jGBcX/Oracle-SQL.png",
          "estado":0
        },
        {
          "nombre": "Ionic",
          "imagen": "https://i.postimg.cc/TY7CqJ9c/ionic.png",
          "estado": 1
        },
        {
          "nombre": "Python",
          "imagen": "https://i.postimg.cc/FRVxfyz3/python.png",
          "estado": 1
        },
        {
          "nombre": "Colab",
          "imagen": "https://i.postimg.cc/4yXBw8qW/colab.png",
          "estado": 1
        },
        {
          "nombre": "MongoDB",
          "imagen": "https://i.postimg.cc/7Z5XBJtr/mongo.png",
          "estado": 1
        },
        {
          "nombre": "Node JS",
          "imagen": "https://i.postimg.cc/7L7948yB/nodejs.png",
          "estado": 1
        },
        {
          "nombre": "Bulma CSS",
          "imagen": "https://i.postimg.cc/T1QQsVXf/bulmacss.png",
          "estado": 1
        },
        {
          "nombre": "Postman",
          "imagen": "https://i.postimg.cc/25v1CG5C/Postman.png",
          "estado":2
        }
      ]
    }
    for (const item in learningJSON.aprendiendo) {
      let herramienta = new ToolsLanguages();
      herramienta.nombre = learningJSON.aprendiendo[item].nombre;
      herramienta.imagen = learningJSON.aprendiendo[item].imagen;
      herramienta.estado = learningJSON.aprendiendo[item].estado;
      this.listaHerramientas.push(herramienta);
    }
  }
}
