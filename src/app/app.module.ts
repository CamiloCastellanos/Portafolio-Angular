import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// Translate
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// Spinner
import { NgxSpinnerModule } from 'ngx-spinner';
// Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// Particles
import { NgxParticlesModule } from "@tsparticles/angular";
// Propios
import { AppComponent } from './app.component';
import { AppRouting } from './app.routes';
import { HomeModule } from './pages/home/home.module';
import { WorkModule } from './pages/work/work.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { LearningModule } from './pages/learning/learning.module';
import { ProfileModule } from './pages/profile/profile.module';
import { LayoutComponent } from './shared/components/layout/layout/layout.component';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { SocialNetworkModule } from './shared/components/social-network/social-network.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { environment } from '../environments/environment';

/**
 * Rutas de los archivos de los idiomas
 * @param http
 * @returns
 */
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({ declarations: [
        AppComponent,
        LayoutComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRouting,
        NavbarModule,
        SocialNetworkModule,
        FooterModule,
        NgxParticlesModule,
        BrowserAnimationsModule,
        NgxSpinnerModule,
        HomeModule,
        WorkModule,
        ProjectsModule,
        LearningModule,
        ProfileModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore())], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
