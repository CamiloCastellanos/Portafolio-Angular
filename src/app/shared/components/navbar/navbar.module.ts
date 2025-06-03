import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NavbarMovileComponent } from './components/navbar-movile/navbar-movile.component';
import { NavbarWebComponent } from './components/navbar-web/navbar-web.component';



@NgModule({
  declarations: [NavbarComponent, NavbarMovileComponent, NavbarWebComponent],
  exports: [NavbarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ]
})
export class NavbarModule { }
