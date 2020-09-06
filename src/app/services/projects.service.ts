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
        "lenguaje": "sin_imagen",
        "descripcion": "Una aplicación de una sola página. En la cual se busca a unos super Heroes",
        "imagen": "sin_imagen.png",
        "url": "https://github.com/CamiloCastellanos/Angular/tree/master/2-Proyecto"
      },
      {
        "titulo": "SPA",
        "lenguaje": "sin_imagen",
        "descripcion": "Una aplicación de una sola página. En la cual se busca a unos super Heroes",
        "imagen": "sin_imagen.png",
        "url": "https://github.com/CamiloCastellanos/Angular/tree/master/2-Proyecto"
      },
      {
        "titulo": "SPA",
        "lenguaje": "sin_imagen",
        "descripcion": "Una aplicación de una sola página. En la cual se busca a unos super Heroes",
        "imagen": "sin_imagen.png",
        "url": "https://github.com/CamiloCastellanos/Angular/tree/master/2-Proyecto"
      },
      {
        "titulo": "SPA",
        "lenguaje": "sin_imagen",
        "descripcion": "Una aplicación de una sola página. En la cual se busca a unos super Heroes",
        "imagen": "sin_imagen.png",
        "url": "https://github.com/CamiloCastellanos/Angular/tree/master/2-Proyecto"
      },
      {
        "titulo": "SPA",
        "lenguaje": "Angular",
        "descripcion": "Una aplicación de una sola página. En la cual se busca a unos super Heroes",
        "imagen": "sin_imagen.png",
        "url": "https://github.com/CamiloCastellanos/Angular/tree/master/2-Proyecto"
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
