/*Rutas*/
import { APP_ROUTING } from './app.routes'
import { Router } from '@angular/router';

//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgParticlesModule } from "ng-particles";
import { NgxTypedJsModule } from 'ngx-typed-js';
import { HomeModule } from './Pages/Home/home.module';
import { WorkModule } from './Pages/Work/work.module';
import { ProjectsModule } from './Pages/Projects/projects.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/*Componentes*/
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LearningModule } from './Pages/Learning/learning.module';
import { ProfileModule } from './Pages/Profile/profile.module';

/**
 * Rutas de los archivos de los idiomas
 * @param http
 * @returns
 */
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxTypedJsModule,
    NgxSpinnerModule,
    HomeModule,
    WorkModule,
    ProjectsModule,
    LearningModule,
    SharedModule,
    CoreModule,
    ProfileModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
