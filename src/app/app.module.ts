/*Rutas*/
import {APP_ROUTING} from './app.routes'
import { Router } from '@angular/router';

//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';
import {NgParticlesModule} from "ng-particles";
import {NgxTypedJsModule} from 'ngx-typed-js';
import { HomeModule } from './Pages/Home/home.module';
import { WorkModule } from './Pages/Work/work.module';
import { ProjectsModule } from './Pages/Projects/projects.module';

/*Componentes*/
import { AppComponent } from './app.component';
import { SocialNetworkComponent } from './components/social-network/social-network.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { LearningModule } from './Pages/Learning/learning.module';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialNetworkComponent,
    NavbarComponent,
    FooterComponent,
    ContactFormComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule,
    NgxTypedJsModule,
    HomeModule,
    WorkModule,
    ProjectsModule,
    LearningModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
