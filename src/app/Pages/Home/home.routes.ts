import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

const HOME_ROUTES: Routes = [
    { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(HOME_ROUTES)
  ],
  exports: [
    RouterModule
  ]

})

export class HomeRoutingModule{}
