import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy:PreloadAllModules,
        relativeLinkResolution: 'legacy'
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
