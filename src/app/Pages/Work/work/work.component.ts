import { Component, signal } from '@angular/core';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Work } from '../../../models/work';
import { WorkService } from '../services/work.service';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { TimeLineComponent } from '../components/time-line/time-line.component';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
  standalone: true,
  imports: [
    CarouselComponent,
    TimeLineComponent,
    TranslateModule,
  ],
})
export default class WorkComponent {
  workList = signal<Work[]>([]);
  language: string = "es";
  textDescription: string = "Cargo 🧑🏼‍💻";

  constructor(
    private workService: WorkService,
    private spinnerService: NgxSpinnerService,
    private translate: TranslateService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.language = event.lang
      this.textDescription = event.lang == 'es' ? "Cargo 🧑🏼‍💻" : "Position 🧑🏼‍💻";
    });
    this.getWork();
  }

  ngOnInit(): void {
    this.spinnerService.show();
    this.language = this.translate.currentLang;
    this.textDescription = this.language == 'es' ? "Cargo 🧑🏼‍💻" : "Position 🧑🏼‍💻";
  }

  private getWork() {
    this.workService.cargarTrabajos().subscribe((data: any) => {
      this.workList.set(data);
      this.spinnerService.hide();
    });
  }
}
