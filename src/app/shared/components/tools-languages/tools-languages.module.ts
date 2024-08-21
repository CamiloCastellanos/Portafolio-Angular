import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsLanguagesComponent } from './tools-languages/tools-languages.component';
import { TranslateModule } from '@ngx-translate/core';
import { InfiniteCarouselModule } from '../infinite-carousel/infinite-carousel.module';



@NgModule({
  declarations: [ToolsLanguagesComponent],
  exports: [ToolsLanguagesComponent],
  imports: [
    CommonModule,
    TranslateModule,
    InfiniteCarouselModule
  ]
})
export class ToolsLanguagesModule { }
