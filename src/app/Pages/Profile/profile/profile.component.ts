import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  email = 'camilo.castellanos.puentes@gmail.com';
  textTooltip = "";
  lang: string = "es";
  typographyAbout = "font-weight-500 typography-open-sans";
  typographyTable = "font-weight-500 typography-open-sans";
  typographyFrontEndTitle = "font-weight-600 typography-lora";
  typographyFrontEnd = "font-weight-500 typography-open-sans";
  typographyBackEndTitle = "font-weight-600 typography-lora";
  typographyBackEnd = "font-weight-500 typography-open-sans";
  curriculumVitaeEn = "https://drive.google.com/file/d/1uA8rPnOOOQmZM9FJQgI1m5DXGEt_MpN5/view?usp=drive_link";
  curriculumVitaeEs = "https://drive.google.com/file/d/1iiOjGLteQNDpTcoNLteAJIJM5gcYWjq7/view?usp=drive_link";


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
