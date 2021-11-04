import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { lenguajes } from 'src/app/Common/GlobalVariables';
import { frases } from '../../../../Common/GlobalVariables';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public fraseHome: string[] = [];

  constructor(private translate: TranslateService) {
    if (this.translate.currentLang == lenguajes.es) {
      this.fraseHome.push(frases.es);
    } else {
      this.fraseHome.push(frases.en);
    }
  }

  ngOnInit(): void {
  }

}
