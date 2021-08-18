import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';

const PLEARNING_ROUTES: Routes = [
    { path: 'perfil', component: ProfileComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(PLEARNING_ROUTES)
  ],
  exports: [
    RouterModule
  ]

})

export class ProfileRoutingModule{}
