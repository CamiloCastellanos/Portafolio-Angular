import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningService } from './services/learning.service';
import { ProjectsService } from './services/projects.service';
import { ToolsLanguagesService } from './services/tools-languages.service';
import { WorksService } from './services/works.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LearningService,
    ProjectsService,
    ToolsLanguagesService,
    WorksService
  ]
})
export class CoreModule { }
