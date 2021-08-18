import { RouterModule, Routes } from '@angular/router'
import { HomeModule } from './Pages/Home/home.module';
import { ProjectsModule } from './Pages/Projects/projects.module';
import { WorkModule } from './Pages/Work/work.module';
import { LearningModule } from './Pages/Learning/learning.module';
import { LayoutComponent } from './layout/layout.component';
import { ProfileModule } from './Pages/Profile/profile.module';

const APP_ROUTES: Routes = [
  {
    path: '', component: LayoutComponent, pathMatch: 'full', children:
      [
        { path: 'home', loadChildren: () => import('./Pages/Home/home.module').then(home => HomeModule) },
        { path: 'perfil', loadChildren: () => import('./Pages/Profile/profile.module').then(profile => ProfileModule) },
        { path: 'proyectosPersonales', loadChildren: () => import('./Pages/Projects/projects.module').then(projects => ProjectsModule) },
        { path: 'trabajos', loadChildren: () => import('./Pages/Work/work.module').then(work => WorkModule) },
        { path: 'seguirAprendiendo', loadChildren: () => import('./Pages/Learning/learning.module').then(learning => LearningModule) },
        { path: '**', pathMatch: 'full', redirectTo: 'home' },
        { path: '', pathMatch: 'full', redirectTo: 'home' }
      ],
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { relativeLinkResolution: 'legacy' });
