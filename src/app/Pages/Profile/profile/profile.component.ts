import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  email = 'camilo.castellanos.puentes@gmail.com';
  textTooltip = ""
  lang: string = "es";

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
    });
  }

  copyEmail() {
    navigator.clipboard.writeText(this.email);
    this.textTooltip = "Copiado"
    setTimeout(() => {
      this.textTooltip = ""
    }, 2500)
  }
}
