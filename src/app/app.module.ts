/*Rutas*/
import {APP_ROUTING} from './app.routes'
import { Router } from '@angular/router';

//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';

/*Componentes*/
import { AppComponent } from './app.component';
import { GitComponent } from './components/git/git.component';
import { HomeComponent } from './components/home/home.component';
import { SocialNetworkComponent } from './components/social-network/social-network.component';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { WorkComponent } from './components/work/work.component';
import { LearningComponent } from './components/learning/learning.component';

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    HomeComponent,
    SocialNetworkComponent,
    LateralMenuComponent,
    NavbarComponent,
    FooterComponent,
    ContactFormComponent,
    WorkComponent,
    LearningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
