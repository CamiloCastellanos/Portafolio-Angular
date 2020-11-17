import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  listaProyecto: Project[] = []

  constructor() {
    this.cargarProyectos();
  }

  cargarProyectos() {
    let proyectosJSON = {
      "proyectos": [{
        "titulo": "SPA",
        "lenguaje": "https://i.postimg.cc/xjPsq2Nh/angular.png",
        "descripcion": "En este proyecto SPA (single page application/ aplicación de página única) se realizo un buscador de super héroes implementando rutas (routes) y un servicio el cual trae la lista de los héroes.",
        "imagen": "https://i.postimg.cc/TwvJtkFZ/Portada.png",
        "url": "https://github.com/CamiloCastellanos/Angular/tree/master/2-Proyecto"
      },
      {
        "titulo": "PIPES",
        "lenguaje": "https://i.postimg.cc/xjPsq2Nh/angular.png",
        "descripcion": "En este proyecto se explora la implementación de los pipes (Transformadores de cadenas a un formato en la vista) y también se ve al creación de un pipe.",
        "imagen": "https://i.postimg.cc/ZqFf3tDW/Pipe-1.png",
        "url": "https://github.com/CamiloCastellanos/Angular/tree/master/3-Proyecto"
      },
      {
        "titulo": "SpotiApp",
        "lenguaje": "https://i.postimg.cc/xjPsq2Nh/angular.png",
        "descripcion": "Es un proyecto en el cual se consume la web API de Spotify para mostrar las canciones más escuchadas, además de mostrar la información del cantante y sus mejores canciones.",
        "imagen": "https://i.postimg.cc/KYFfmpvx/Portada.png",
        "url": "https://github.com/CamiloCastellanos/Angular/tree/master/4-Proyecto"
      },
      {
        "titulo": "Lista de Deseos IONOC",
        "lenguaje": "https://i.postimg.cc/TY7CqJ9c/ionic.png",
        "descripcion": "Es una aplicación creada con IONIC la cual maneja una lista de tareas pendientes y completa. Para guardar la información se utilizó el Local Storage de los navegadores.",
        "imagen": "https://i.postimg.cc/mZc5XqP5/Portada.png",
        "url": "https://github.com/CamiloCastellanos/Angular/tree/master/5-Proyecto"
      },
      {
        "titulo": "Api-Restful-con-NodeJS-y-MongoDB",
        "lenguaje": "https://i.postimg.cc/7Z5XBJtr/mongo.png",
        "descripcion": "Aplicacion Restfu con Node Js y MongoDB (CRUD basico) Este api se realizó con NodeJS para realizar un CRUD en la base de datos no relacional MongoDB.",
        "imagen": "https://i.postimg.cc/65bTW8W3/primer-mensaje.png",
        "url": "https://github.com/CamiloCastellanos/Api-Restful-con-NodeJS-y-MongoDB"
      }
      ]
    }

    for (const item in proyectosJSON.proyectos) {
      let proyecto = new Project();
      proyecto.titulo = proyectosJSON.proyectos[item].titulo;
      proyecto.lenguaje = proyectosJSON.proyectos[item].lenguaje;
      proyecto.descripcion = proyectosJSON.proyectos[item].descripcion;
      proyecto.imagen = proyectosJSON.proyectos[item].imagen;
      proyecto.url = proyectosJSON.proyectos[item].url;
      this.listaProyecto.push(proyecto);
    }

  }
}
