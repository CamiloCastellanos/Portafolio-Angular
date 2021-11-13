import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Work } from 'src/app/models/work.model';
import { WorksService } from '../../../../core/services/works.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  listaTrabajo: Work[] = [];
  idiomaPagina: String = "es";

  constructor(
    private servicioTrabajo: WorksService,
    private spinnerService: NgxSpinnerService,
    private translate: TranslateService) {
    this.listaTrabajos();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.idiomaPagina = event.lang
    });
  }

  ngOnInit(): void {
    this.spinnerService.show();
    this.idiomaPagina =  this.translate.currentLang;
  }

  listaTrabajos() {
    this.listaTrabajo = [];

    this.servicioTrabajo.cargarTrabajos().subscribe(data => {

      data.forEach(element => {
        let trabajo = new Work();
        trabajo.titulo = element.payload.doc.data().titulo;
        trabajo.descripcion = element.payload.doc.data().descripcion;
        trabajo.descripcionEN = element.payload.doc.data().descripcionEN;
        trabajo.imagen = element.payload.doc.data().imagen;
        trabajo.url = element.payload.doc.data().url;
        trabajo.fechaInicio = element.payload.doc.data().fechaInicio;
        trabajo.fechaFin = element.payload.doc.data().fechaFin;
        trabajo.fechaFinEN =element.payload.doc.data().fechaFinEN;
        this.listaTrabajo.push(trabajo);
      });

      this.spinnerService.hide();
    });

  }

}
