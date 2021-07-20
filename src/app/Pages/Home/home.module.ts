import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home.routes';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgxTypedJsModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
