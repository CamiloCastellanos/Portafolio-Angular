import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  listaProyecto: Project[] = []

  constructor(private servicioProyecto: ProjectsService) {
    this.listaProyectos();
  }

  ngOnInit(): void {
  }

  listaProyectos() {
    this.listaProyecto = [];
    this.servicioProyecto.cargarProyectos().subscribe(data => {

      data.forEach(element => {

        let proyecto = new Project();
        proyecto.titulo = element.payload.doc.data().titulo;
        proyecto.lenguaje = element.payload.doc.data().lenguaje;
        proyecto.descripcion = element.payload.doc.data().descripcion;
        proyecto.imagen = element.payload.doc.data().imagen;
        proyecto.url = element.payload.doc.data().url;

        this.listaProyecto.push(proyecto);
      });

    });

  }


}
