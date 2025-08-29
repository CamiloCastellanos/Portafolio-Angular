import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Work } from '../../../models/Work.model';
import { WorkService } from '../services/work.service'
import { TimeLineComponent } from '../Components/time-line/time-line.component';
import { CarouselComponent } from '../components/carousel/carousel.component';

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

  constructor(
    private workService: WorkService,
    private spinnerService: NgxSpinnerService,
    private translate: TranslateService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.language = event.lang
    });
    this.getWork();
  }

  ngOnInit(): void {
    this.spinnerService.show();
    this.language = this.translate.currentLang;
  }

  private getWork() {
    this.workService.cargarTrabajos().subscribe((data: any) => {
      this.workList.set(data);
      // this.workList.sort((first, second) => second.order - first.order);
      this.spinnerService.hide();
    });
  }
}
