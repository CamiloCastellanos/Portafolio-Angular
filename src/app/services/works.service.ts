import { Injectable } from '@angular/core';
import { Work } from '../models/work.model';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  listaTrabajo: Work[] = [];

  constructor() {
    this.cargarTrabajos();
  }

  cargarTrabajos() {
    let trabajosJSON = {
      "trabajos": [
        {
          "titulo": "MINERÍA TEXAS COLOMBIA S.A.",
          "descripcion": "09-01-2018 – 06-06-2018 Cargo: Practicante",
          "imagen": "mtc.jpg",
          "url": ""
        },
        {
          "titulo": "Colombian Shared Services",
          "descripcion": "23-06-2018 - 03-05-2019 Cargo: Desarrollador de Aplicaciones",
          "imagen": "css.png",
          "url": ""
        },
        {
          "titulo": "MAREIGUA",
          "descripcion": "10-06-2019 - 31-10-2019 Cargo: INGENIERO DE DESARROLLO",
          "imagen": "mareigua.jpg",
          "url": "https://www.mareigua.co/es/"
        },
        {
          "titulo": "APORTES EN LÍNEA",
          "descripcion": "31-10-2019 – 13-03-2020 Cargo:Analista I/INGENIERO DE DESARROLLO",
          "imagen": "aportesenlinea.jpg",
          "url": "https://www.aportesenlinea.com/Home/home.aspx?ReturnUrl=%2f"
        },
        {
          "titulo": "CORFERIAS",
          "descripcion": "13-04-2020 – Fecha Actual Cargo:INGENIERO DE SOLUCIONES WEB",
          "imagen": "corferias.png",
          "url": ""
        }
      ]
    }

    for (const item in trabajosJSON.trabajos) {
      let trabajo = new Work();
      trabajo.titulo = trabajosJSON.trabajos[item].titulo;
      trabajo.descripcion = trabajosJSON.trabajos[item].descripcion;
      trabajo.imagen = trabajosJSON.trabajos[item].imagen;
      trabajo.url = trabajosJSON.trabajos[item].url;
      this.listaTrabajo.push(trabajo);
    }

  }
}
