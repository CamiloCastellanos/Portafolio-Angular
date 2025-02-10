import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteCarouselComponent } from './infinite-carousel/infinite-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    InfiniteCarouselComponent
  ],
  exports: [InfiniteCarouselComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class InfiniteCarouselModule { }
