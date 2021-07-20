import { RouterModule, Routes } from '@angular/router'
import { GitComponent } from './components/git/git.component';
import { LearningComponent } from './components/learning/learning.component';
import { HomeModule } from './Pages/Home/home.module';
import { WorkModule } from './Pages/Work/work.module';

const APP_ROUTES: Routes = [
  { path: 'home', loadChildren: () => import('./Pages/Home/home.module').then(home => HomeModule) },
  { path: 'proyectosPersonales', component: GitComponent },
  { path: 'trabajos', loadChildren: () => import('./Pages/Work/work.module').then(work => WorkModule)  },
  { path: 'seguirAprendiendo', component: LearningComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { relativeLinkResolution: 'legacy' });
