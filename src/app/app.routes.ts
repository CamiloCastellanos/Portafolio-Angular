import { RouterModule, Routes } from '@angular/router'
import { HomeModule } from './Pages/Home/home.module';
import { ProjectsModule } from './Pages/Projects/projects.module';
import { WorkModule } from './Pages/Work/work.module';
import { LearningModule } from './Pages/Learning/learning.module';
import { LayoutComponent } from './components/layout/layout.component';

const APP_ROUTES: Routes = [
  {
    path: '', component: LayoutComponent, pathMatch: 'full', children:
      [
        { path: 'home', loadChildren: () => import('./Pages/Home/home.module').then(home => HomeModule) },
        { path: 'proyectosPersonales', loadChildren: () => import('./Pages/Projects/projects.module').then(projects => ProjectsModule) },
        { path: 'trabajos', loadChildren: () => import('./Pages/Work/work.module').then(work => WorkModule) },
        { path: 'seguirAprendiendo', loadChildren: () => import('./Pages/Learning/learning.module').then(learning => LearningModule) },
        { path: '**', pathMatch: 'full', redirectTo: 'home' },
        { path: '', pathMatch: 'full', redirectTo: 'home' }
      ]
  },

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { relativeLinkResolution: 'legacy' });
