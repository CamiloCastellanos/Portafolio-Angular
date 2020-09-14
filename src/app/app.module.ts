import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitComponent } from './components/git/git.component';
import { HomeComponent } from './components/home/home.component';
import { SocialNetworkComponent } from './components/social-network/social-network.component';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    HomeComponent,
    SocialNetworkComponent,
    LateralMenuComponent,
    NavbarComponent,
    FooterComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
