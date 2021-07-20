import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitComponent } from './components/git/git.component';
import { ProjectsRoutingModule } from './projects.routes';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    GitComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
