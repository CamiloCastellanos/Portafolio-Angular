import { Component } from '@angular/core';

import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ContactInformationComponent } from '../../contact/components/contact-information/contact-information.component';

@Component({
    selector: 'app-social-network',
    templateUrl: './social-network.component.html',
    styleUrl: './social-network.component.scss',
    standalone: true,
    imports: [
      ContactInformationComponent
    ]
})
export class SocialNetworkComponent {
  lang: string = "es";
  curriculumVitaeEn = "https://drive.google.com/file/d/1uA8rPnOOOQmZM9FJQgI1m5DXGEt_MpN5/view?usp=drive_link";
  curriculumVitaeEs = "https://drive.google.com/file/d/1iiOjGLteQNDpTcoNLteAJIJM5gcYWjq7/view?usp=drive_link";

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
    });
  }
}
