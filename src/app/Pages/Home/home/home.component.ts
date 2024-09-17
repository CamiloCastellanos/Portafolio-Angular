import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { motivationalQuotes } from '../../../common/GlobalVariables';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  phraseEn: string[] = motivationalQuotes.en;
  phraseEs: string[] = motivationalQuotes.es;
  lang: string = "es";
  typographyTitle = "typography-lora font-weight-600"
  typographyText = "typography-open-sans font-weight-500"
  typographyTypeWriter="typography-lora font-weight-600"

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
    });
  }

  ngOnInit(): void {
    this.lang = this.translate.currentLang;
  }
}
