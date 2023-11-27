import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HomeRoutingModule } from './home.routes';
import { HomeComponent } from './home/home.component';
import { TypeWriterComponent } from './components/type-writer/type-writer.component';

@NgModule({
  declarations: [HomeComponent, TypeWriterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule
  ]
})
export class HomeModule { }
