import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Project } from '../../../models/Project';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectList: Project[] = [];
  language: string = "es";
  textButton: string = 'Ver más - Código - Demostración - Ver más - '
  private textButtonLanguage = ['Ver más - Código - Demostración - Ver más - ', 'See more - Code - Demo - See more - ']

  constructor(private projectService: ProjectsService,
    private spinnerService: NgxSpinnerService,
    private translate: TranslateService) {
    this.getProjects();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.language = event.lang
      this.textButton = event.lang == 'es' ? this.textButtonLanguage[0] : this.textButtonLanguage[1]
    });
  }

  ngOnInit(): void {
    this.spinnerService.show();
    this.language = this.translate.currentLang;
    this.textButton = this.language == 'es' ? this.textButtonLanguage[0] : this.textButtonLanguage[1]
  }

  getProjects() {
    this.projectService.cargarProyectos().subscribe((data: any) => {
      this.projectList = data as Project[];
      this.spinnerService.hide();
    });
  }
}
