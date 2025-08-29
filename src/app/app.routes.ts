import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./Pages/Home/home/home.component').then(c => c.default)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./Pages/Profile/profile/profile.component').then(c => c.default)
  },
  {
    path: 'proyectosPersonales',
    loadComponent: () => import('./Pages/Projects/projects/projects.component').then(c => c.default)
  },
  {
    path: 'trabajos',
    loadComponent: () => import('./Pages/Work/work/work.component').then(c => c.default)
  },
  {
    path: 'seguirAprendiendo',
    loadComponent: () => import('./Pages/Learning/learning/learning.component').then(c => c.default)
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


export const AppRouting = RouterModule.forRoot(
  routes,
  {
    preloadingStrategy: PreloadAllModules
  }
);
