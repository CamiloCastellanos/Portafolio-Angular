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
        "lenguaje": "angular.png",
        "descripcion": "En este proyecto SPA (single page application/ aplicación de página única) se realizo un buscador de super héroes implementando rutas (routes) y un servicio el cual trae la lista de los héroes.",
        "imagen": "https://github.com/CamiloCastellanos/Angular/blob/master/2-Proyecto/Imagenes/Portada.png?raw=true",
        "url": "https://github.com/CamiloCastellanos/Angular/tree/master/2-Proyecto"
      },
      {
        "titulo": "PIPES",
        "lenguaje": "angular.png",
        "descripcion": "En este proyecto se explora la implementación de los pipes (Transformadores de cadenas a un formato en la vista) y también se ve al creación de un pipe.",
        "imagen": "https://github.com/CamiloCastellanos/Angular/blob/master/3-Proyecto/Imagenes/Pipe-1.png?raw=true",
        "url": "https://github.com/CamiloCastellanos/Angular/tree/master/3-Proyecto"
      },
      {
        "titulo": "SpotiApp",
        "lenguaje": "angular.png",
        "descripcion": "Es un proyecto en el cual se consume la web API de Spotify para mostrar las canciones más escuchadas, además de mostrar la información del cantante y sus mejores canciones.",
        "imagen": "https://github.com/CamiloCastellanos/Angular/blob/master/4-Proyecto/Imagenes/Portada.png?raw=true",
        "url": "https://github.com/CamiloCastellanos/Angular/tree/master/4-Proyecto"
      },
      {
        "titulo": "Lista de Deseos IONOC",
        "lenguaje": "ionic.png",
        "descripcion": "Es una aplicación creada con IONIC la cual maneja una lista de tareas pendientes y completa. Para guardar la información se utilizó el Local Storage de los navegadores.",
        "imagen": "https://github.com/CamiloCastellanos/Angular/blob/master/5-Proyecto/Imagenes/Portada.png?raw=true",
        "url": "https://github.com/CamiloCastellanos/Angular/tree/master/5-Proyecto"
      },
      {
        "titulo": "Api-Restful-con-NodeJS-y-MongoDB",
        "lenguaje": "mongo.png",
        "descripcion": "Aplicacion Restfu con Node Js y MongoDB (CRUD basico) Este api se realizó con NodeJS para realizar un CRUD en la base de datos no relacional MongoDB.",
        "imagen": "https://github.com/CamiloCastellanos/Api-Restful-con-NodeJS-y-MongoDB/blob/master/Image/primer-mensaje.png?raw=true",
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
