import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private translate: TranslateService, private themeService: ThemeService) { }

  changeLanguage(idiomaSeleccionado: string) {
    this.translate.use(idiomaSeleccionado.valueOf());
  }
}
