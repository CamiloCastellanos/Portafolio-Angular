import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteCarouselComponent } from './infinite-carousel/infinite-carousel.component';

@NgModule({
  declarations: [
    InfiniteCarouselComponent
  ],
  exports: [InfiniteCarouselComponent],
  imports: [
    CommonModule
  ]
})
export class InfiniteCarouselModule { }
