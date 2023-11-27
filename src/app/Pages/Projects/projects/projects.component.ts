import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/Project.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  listaProyecto: Project[] = [];
  idiomaPagina: string = "es";

  constructor(private servicioProyecto: ProjectsService,
    private spinnerService: NgxSpinnerService,
    private translate: TranslateService) {
    this.listaProyectos();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.idiomaPagina = event.lang
    });
  }

  ngOnInit(): void {
    this.spinnerService.show();
    this.idiomaPagina = this.translate.currentLang;
  }

  listaProyectos() {
debugger
    this.servicioProyecto.cargarProyectos().subscribe((data: any) => {
      this.listaProyecto = [];

      data.forEach((element: any) => {

        let proyecto = new Project();
        proyecto.titulo = element.titulo;
        proyecto.tituloEN = element.tituloEN;
        proyecto.lenguaje = element.lenguaje;
        proyecto.descripcion = element.descripcion;
        proyecto.descripcionEN = element.descripcionEN;
        proyecto.imagen = element.imagen;
        proyecto.imagen2 = element.imagen2;
        proyecto.url = element.url;

        this.listaProyecto.push(proyecto);
      });

      this.spinnerService.hide();
    });

  }
}
