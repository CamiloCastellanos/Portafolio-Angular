import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects.routers';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectsComponent } from './projects/projects.component';
import { ToolsLanguagesModule } from '../../shared/components/tools-languages/tools-languages.module';
import { BookComponent } from './components/book/book.component';
import { ProjectMobileComponent } from './components/project-mobile/project-mobile.component';


@NgModule({
  declarations: [ProjectsComponent, BookComponent, ProjectMobileComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    TranslateModule,
    ToolsLanguagesModule
  ]
})

export class ProjectsModule { }
