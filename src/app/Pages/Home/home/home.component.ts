import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { motivationalQuotes } from '../../../common/global-variables';
import { HomeDesktopComponent } from '../components/home-desktop/home-desktop.component';
import { HomeMobileComponent } from '../components/home-mobile/home-mobile.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    HomeDesktopComponent,
    HomeMobileComponent
  ]
})
export default class HomeComponent {
  phrase: string[] = []
  typographyTitle = "typography-lora font-weight-600"
  typographyText = "typography-open-sans font-weight-500"
  typographyTypeWriter = "typography-lora font-weight-600"
  private lang: string = "es";
  private readonly phraseEs: string[] = motivationalQuotes.es;
  private readonly phraseEn: string[] = motivationalQuotes.en;

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
      this.phrase = this.lang === 'es' ? this.phraseEs : this.phraseEn;
    });
  }

  ngOnInit(): void {
    this.lang = this.translate.currentLang;
    this.phrase = this.lang === 'es' ? this.phraseEs : this.phraseEn;
  }
}
