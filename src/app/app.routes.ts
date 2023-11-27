import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { ProfileModule } from './pages/profile/profile.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { WorkModule } from './pages/work/work.module';
import { LearningModule } from './pages/learning/learning.module';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(home => HomeModule) },
  { path: 'perfil', loadChildren: () => import('./pages/profile/profile.module').then(profile => ProfileModule) },
  { path: 'proyectosPersonales', loadChildren: () => import('./pages/projects/projects.module').then(projects => ProjectsModule) },
  { path: 'trabajos', loadChildren: () => import('./pages/work/work.module').then(work => WorkModule) },
  { path: 'seguirAprendiendo', loadChildren: () => import('./pages/learning/learning.module').then(learning => LearningModule) },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: '' }];


export const AppRouting = RouterModule.forRoot(
  routes,
  {
    preloadingStrategy: PreloadAllModules
  }
);