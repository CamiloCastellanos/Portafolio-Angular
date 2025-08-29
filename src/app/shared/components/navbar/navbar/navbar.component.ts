import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarWebComponent } from '../components/navbar-web/navbar-web.component';
import { NavbarMobileComponent } from '../components/navbar-mobile/navbar-mobile.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
  imports: [
    NavbarWebComponent,
    NavbarMobileComponent,
    TranslateModule
  ],
})
export class NavbarComponent {

  constructor(private translate: TranslateService) { }

  changeLanguage(idiomaSeleccionado: string) {
    this.translate.use(idiomaSeleccionado.valueOf());
  }
}
