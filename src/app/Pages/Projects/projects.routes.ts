import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { GitComponent } from './components/git/git.component';

const PROJECTS_ROUTES: Routes = [
    { path: 'proyectosPersonales', component: GitComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(PROJECTS_ROUTES)
  ],
  exports: [
    RouterModule
  ]

})

export class ProjectsRoutingModule{}
