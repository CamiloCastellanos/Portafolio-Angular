import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  desplegar(): void {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#navBarMenu');
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  }

  recoger(): void {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#navBarMenu');
    burger.classList.remove('is-active');
    menu.classList.remove('is-active');
  }

  CambioIdioma(idiomaSeleccionado: string) {
    this.translate.use(idiomaSeleccionado.valueOf());
  }
}
