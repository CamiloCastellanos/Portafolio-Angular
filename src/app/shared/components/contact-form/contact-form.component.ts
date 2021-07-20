import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  envioCorreo() {
    alert("Lo sentimos de momento no se puede enviar mensajes.");//He recibido tu correo, pronto tendrás respuesta.
  }

}



