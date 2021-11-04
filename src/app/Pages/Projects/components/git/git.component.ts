import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Project } from '../../../../models/project.model';
import { ProjectsService } from '../../../../core/services/projects.service';
import { TranslateService } from '@ngx-translate/core';
import { lenguajes } from 'src/app/Common/GlobalVariables';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  listaProyecto: Project[] = [];
  idiomaPagina: String = "es";

  constructor(private servicioProyecto: ProjectsService,
    private spinnerService: NgxSpinnerService,
    private translate: TranslateService) {
    this.listaProyectos();
    if (this.translate.currentLang == lenguajes.es) {
      this.idiomaPagina = lenguajes.es;
    } else {
      this.idiomaPagina = lenguajes.en;
    }
  }

  ngOnInit(): void {
    this.spinnerService.show();
  }

  listaProyectos() {

    this.servicioProyecto.cargarProyectos().subscribe(data => {
      this.listaProyecto = [];

      data.forEach(element => {

        let proyecto = new Project();
        proyecto.titulo = element.payload.doc.data().titulo;
        proyecto.tituloEN =element.payload.doc.data().tituloEN;
        proyecto.lenguaje = element.payload.doc.data().lenguaje;
        proyecto.descripcion = element.payload.doc.data().descripcion;
        proyecto.descipcionEN = element.payload.doc.data().descripcionEN;
        proyecto.imagen = element.payload.doc.data().imagen;
        proyecto.imagen2 = element.payload.doc.data().imagen2;
        proyecto.url = element.payload.doc.data().url;

        this.listaProyecto.push(proyecto);
      });

      this.spinnerService.hide();
    });

  }


}
