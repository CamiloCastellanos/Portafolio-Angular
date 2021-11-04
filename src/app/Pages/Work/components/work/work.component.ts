import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Work } from 'src/app/models/work.model';
import { WorksService } from '../../../../core/services/works.service';
import { TranslateService } from '@ngx-translate/core';
import { frases, lenguajes } from 'src/app/Common/GlobalVariables';

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
    if (this.translate.currentLang == lenguajes.es) {
      this.idiomaPagina = lenguajes.es;
    } else {
      this.idiomaPagina = lenguajes.en;
    }
  }

  ngOnInit(): void {
    this.spinnerService.show();
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
        this.listaTrabajo.push(trabajo);
      });

      this.spinnerService.hide();
    });

  }

}
