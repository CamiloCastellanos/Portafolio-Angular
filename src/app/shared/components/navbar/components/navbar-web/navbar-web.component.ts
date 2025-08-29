import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { SwitchThemeComponent } from '../switch-theme/switch-theme.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-web',
  templateUrl: './navbar-web.component.html',
  styleUrl: './navbar-web.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    SwitchThemeComponent,
    TranslateModule,
    RouterLinkActive,
    RouterLink
  ]
})
export class NavbarWebComponent {
  @Output() changeLanguageEvent: EventEmitter<string> = new EventEmitter();

  changeLanguage(language: string) {
    this.changeLanguageEvent.emit(language);
  }

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
}
