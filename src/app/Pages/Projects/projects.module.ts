import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitComponent } from './components/git/git.component';
import { ToolsLanguagesComponent } from '../../components/tools-languages/tools-languages.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProjectsRoutingModule } from './projects.routes';



@NgModule({
  declarations: [
    GitComponent
   // ToolsLanguagesComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
