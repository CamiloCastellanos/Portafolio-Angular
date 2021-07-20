import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home.routes';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { ToolsLanguagesComponent } from '../../components/tools-languages/tools-languages.component';


@NgModule({
  declarations: [
    HomeComponent,
    ToolsLanguagesComponent
  ],
  imports: [
    CommonModule,
    NgxTypedJsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
