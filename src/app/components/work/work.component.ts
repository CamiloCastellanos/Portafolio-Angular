import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/models/work.model';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  listaTrabajo: Work[] = [];

  constructor(private servicioTrabajo: WorksService) {
    this.listaTrabajos();
  }

  ngOnInit(): void {
  }

  listaTrabajos() {
    this.listaTrabajo = [];

    this.servicioTrabajo.cargarTrabajos().subscribe(data => {

      data.forEach(element => {

        let trabajo = new Work();
        trabajo.titulo = element.payload.doc.data().titulo;
        trabajo.descripcion = element.payload.doc.data().descripcion;
        trabajo.imagen = element.payload.doc.data().imagen;
        trabajo.url = element.payload.doc.data().url;
        trabajo.fechaInicio = element.payload.doc.data().fechaInicio;
        trabajo.fechaFin = element.payload.doc.data().fechaFin;
        this.listaTrabajo.push(trabajo);
      });

    });

  }

}
