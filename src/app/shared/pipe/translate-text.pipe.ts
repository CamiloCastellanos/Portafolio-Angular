import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { language } from '../../common/global-variables';

@Pipe({
  name: 'translateText',
  standalone: true,
  pure: false
})
export class TranslateTextPipe implements PipeTransform {

  constructor(private translate: TranslateService) { }

  transform(obj: any, fieldSp: string, fieldEn: string): string {
    if (!obj || !fieldSp || !fieldEn) return '';

    const lang = this.translate.currentLang || this.translate.getDefaultLang();

    return lang == language.es ? obj[fieldSp] : obj[fieldEn];
  }

}
