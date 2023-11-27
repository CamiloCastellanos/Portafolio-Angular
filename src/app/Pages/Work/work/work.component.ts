import { Component } from '@angular/core';
import { Work } from '../../../models/Work.model';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { WorkService } from '../services/work.service'


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  listaTrabajo: Work[] = [];
  idiomaPagina: string = "es";

  constructor(
    private servicioTrabajo: WorkService,
    private spinnerService: NgxSpinnerService,
    private translate: TranslateService) {
    this.listaTrabajos();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.idiomaPagina = event.lang
    });
  }

  ngOnInit(): void {
    this.spinnerService.show();
    this.idiomaPagina = this.translate.currentLang;
  }

  listaTrabajos() {
    this.listaTrabajo = [];

    this.servicioTrabajo.cargarTrabajos().subscribe(data => {

      data.forEach((element: any) => {
        let trabajo = new Work();
        trabajo.titulo = element.titulo;
        trabajo.descripcion = element.descripcion;
        trabajo.descripcionEN = element.descripcionEN;
        trabajo.imagen = element.imagen;
        trabajo.url = element.url;
        trabajo.fechaInicio = element.fechaInicio;
        trabajo.fechaFin = element.fechaFin;
        trabajo.fechaFinEN = element.fechaFinEN;
        this.listaTrabajo.push(trabajo);
      });

      this.spinnerService.hide();
    });

  }
}
