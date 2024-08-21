import { Component } from '@angular/core';
import { Work } from '../../../models/Work.model';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { WorkService } from '../services/work.service'

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  workList: Work[] = [];
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
      this.workList = data as Work[];
      this.workList.sort((first, second) => second.order - first.order);
      this.spinnerService.hide();
    });
  }
}
