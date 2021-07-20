import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialNetworkComponent } from './components/social-network/social-network.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ContactFormComponent,
    SocialNetworkComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ContactFormComponent,
    SocialNetworkComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
