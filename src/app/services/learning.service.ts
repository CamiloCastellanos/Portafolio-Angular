import { Injectable } from '@angular/core';
import { Learning } from '../models/learning.model';

@Injectable({
  providedIn: 'root'
})
export class LearningService {

  listaTitulos: Learning[] = [];

  constructor() {
    this.cargarAprendiendo();
  }

  cargarAprendiendo() {
    let learningJSON = {
      "aprendiendo": [
        {
          "titulo": "Curso de MongoDB Aprende bases de datos NoSQL + API NodeJS",
          "imagen": "https://previews.dropbox.com/p/thumb/AA5eR4IFNe_UPa3OKjyl4H1rViM3QFdKFwLdwTz-7HOqydEKAKeyzYs91RqGEv0rcZ5ZDIyB01IeXqXIGshWL3JPxmKFqEITlLJxfZ-Kaxv4Nl1T2m4dKOfUeYXZK8PJiTcW4V4WVW9-emZXP3Dkd7-SAhsJtAUIT4YoNQ7_FkI2MfWm1XMKUjdHwLpJYI9uZ5z65fEKWcQ4mZZKk8VrcBm4qrUO_BciGXN5_bpaMOa26xzDq9HCRpLG0NDwZqMcGhDFW2RzvzihBiBnlvM1SDfGpSXcN_CKXlhR9ajJ4yuuGbF00xa_0T9grUBIiKOcCoFyQKaAgb3ehr3atNUtZCSUH2SB2fFK5c8xN2XbZR-MZw/p.jpeg?fv_content=true&size_mode=5"
        },
        {
          "titulo": "Matemáticas Aplicadas a la Ciencia de Datos",
          "imagen": "https://previews.dropbox.com/p/thumb/AA4Lt7RSJHEEQeD-J4sfvY4loowvBN0Dpr9XeBb9lmQ8bwKkGg2W8_rDd3rLEVdFwZ41GNsXWkDtFzHr5J-SKNCeWXazkg1sHR11fFrKwpyH0ync8vQyA97108WIsGWlKcRHY8gZQPmuvg08xAzajHmNn6qBMYti_tbDWgXFtcYfIWB-YLoLmcvHu4RQ6tubPgorGIYdruSkvd_294LK_MH-hYluBbHvMC2FD66mnqr1fdcPWa0wlxOiG0F5DnxKJoINJr89LOYnfDJsk_Sm7w02vn20lFHAGF5hQOXMKXYgyWoqFll8kJhR6CzmALgPU6oqrtCCrm1wwpA_EYsONLudw0AbvAdTb1hYBxt8EKBxIw/p.jpeg?fv_content=true&size_mode=5"
        }
      ]
    }

    for (const item in learningJSON.aprendiendo) {
      let titulo = new Learning();
      titulo.titulo = learningJSON.aprendiendo[item].titulo;
      titulo.imagen = learningJSON.aprendiendo[item].imagen;
      this.listaTitulos.push(titulo);
    }

  }
}
