import { RouterModule, Routes } from '@angular/router'
import { GitComponent } from './components/git/git.component';
import { HomeComponent } from './components/home/home.component'
import { LearningComponent } from './components/learning/learning.component';
import { WorkComponent } from './components/work/work.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'proyectosPersonales', component: GitComponent },
    { path: 'trabajos', component: WorkComponent },
    { path: 'seguirAprendiendo', component: LearningComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
