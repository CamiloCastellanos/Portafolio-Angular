import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects.routers';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectsComponent } from './projects/projects.component';
import { ToolsLanguagesModule } from '../../shared/components/tools-languages/tools-languages.module';
import { RedirectButtonComponent } from './components/redirect-button/redirect-button.component';

@NgModule({
  declarations: [ProjectsComponent, RedirectButtonComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    TranslateModule,
    ToolsLanguagesModule
  ]
})
export class ProjectsModule { }
