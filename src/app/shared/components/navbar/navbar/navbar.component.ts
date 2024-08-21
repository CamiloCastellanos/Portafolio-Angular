import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private translate: TranslateService) { }

  displayMenu(): void {
    let burger = document.querySelector('.burger');
    let menu = document.querySelector('#navBarMenu');
    burger?.classList.toggle('is-active');
    menu?.classList.toggle('is-active');

    if (document.getElementById("overlay")?.classList.contains("overlay")) {
      document.getElementById("overlay")?.classList.remove("overlay");
      document.getElementById("mobileMenu")?.classList.remove("is-fixed-top");
    } else {
      document.getElementById("overlay")?.classList.add("overlay");
      document.getElementById("mobileMenu")?.classList.add("is-fixed-top");
    }
    window.scrollTo(0, 0)
  }

  pickUpMenu(): void {
    let burger = document.querySelector('.burger');
    let menu = document.querySelector('#navBarMenu');
    burger?.classList.remove('is-active');
    menu?.classList.remove('is-active');
    document.getElementById("overlay")?.classList.remove("overlay");
    document.getElementById("mobileMenu")?.classList.remove("is-fixed-top");
    window.scrollTo(0, 0)
  }

  changeLanguage(idiomaSeleccionado: string) {
    this.translate.use(idiomaSeleccionado.valueOf());
  }
}
