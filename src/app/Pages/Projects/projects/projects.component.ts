import { Component, signal } from '@angular/core';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Project } from '../../../models/project';
import { ProjectsService } from '../services/projects.service';
import { ToolsLanguagesComponent } from '../../../shared/components/tools-languages/tools-languages/tools-languages.component';
import { CommonModule } from '@angular/common';
import { ProjectMobileComponent } from '../components/project-mobile/project-mobile.component';
import { BookComponent } from '../components/book/book.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ToolsLanguagesComponent,
    BookComponent,
    ProjectMobileComponent
  ]
})
export default class ProjectsComponent {
  projectList = signal<Project[]>([]);
  language: string = "es";
  textButton: string = 'Ver más - Código - Demostración - Ver más - '
  textDemo: string = "Ver Demo";
  textCode: string = "Ver Código";
  private textButtonLanguage = ['Ver más - Código - Demostración - Ver más - ', 'See more - Code - Demo - See more - ']

  constructor(private projectService: ProjectsService,
    private spinnerService: NgxSpinnerService,
    private translate: TranslateService) {
    this.getProjects();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.language = event.lang
      this.textButton = event.lang == 'es' ? this.textButtonLanguage[0] : this.textButtonLanguage[1];
      this.textDemo = event.lang == 'es' ? "Ver Demo" : "Watch demo";
      this.textCode = event.lang == 'es' ? " Ver Código" : "View code";
    });
  }

  ngOnInit(): void {
    this.spinnerService.show();
    this.language = this.translate.currentLang;
    this.textButton = this.language == 'es' ? this.textButtonLanguage[0] : this.textButtonLanguage[1];
    this.textDemo = this.language == 'es' ? "Ver Demo" : "Watch demo";
    this.textCode = this.language == 'es' ? " Ver Código" : "View code";
  }

  getProjects() {
    this.projectService.cargarProyectos().subscribe((data: any) => {
      this.projectList.set(data);
      this.spinnerService.hide();
    });
  }
}
