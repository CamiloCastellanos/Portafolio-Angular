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

  constructor(private projectService: ProjectsService,
    private spinnerService: NgxSpinnerService,
    private translate: TranslateService) {
    this.getProjects();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.language = event.lang
    });
  }

  ngOnInit(): void {
    this.spinnerService.show();
    this.language = this.translate.currentLang;
  }

  getProjects() {
    this.projectService.cargarProyectos().subscribe((data: any) => {
      this.projectList = data as Project[];
      this.spinnerService.hide();
    });
  }
}
