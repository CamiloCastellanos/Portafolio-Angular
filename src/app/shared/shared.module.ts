import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialNetworkComponent } from './components/social-network/social-network.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { RouterModule } from '@angular/router';
import { ToolsLanguagesComponent } from './components/tools-languages/tools-languages.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ContactFormComponent,
    SocialNetworkComponent,
    ToolsLanguagesComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ContactFormComponent,
    SocialNetworkComponent,
    ToolsLanguagesComponent,
    TranslateModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ]
})
export class SharedModule { }
