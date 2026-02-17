import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { CurriculumVitaeComponent } from '../components/curriculum-vitae/curriculum-vitae.component';
// import { AvatarComponent } from '../components/avatar/avatar.component';
import { AboutComponent } from '../components/about/about.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { language } from '../../../common/global-variables';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    AboutComponent,
    ExperienceComponent,
    CurriculumVitaeComponent
  ]
})
export default class ProfileComponent {
  lang: string = "es";
  tooltipCopy: string = "Copy";

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
      this.tooltipCopy = this.lang === language.es ? 'Copiar' : 'Copy';
    });
  }

  ngOnInit() {
    this.lang = this.translate.currentLang;
    this.tooltipCopy = this.lang === language.es ? 'Copiar' : 'Copy';
  }

}
