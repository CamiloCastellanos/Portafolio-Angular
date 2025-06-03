import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { NavbarWebComponent } from './components/navbar-web/navbar-web.component';
import { SwitchThemeComponent } from './components/switch-theme/switch-theme.component';



@NgModule({
  declarations: [NavbarComponent, NavbarMobileComponent, NavbarWebComponent, SwitchThemeComponent],
  exports: [NavbarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ]
})
export class NavbarModule { }
