import { Component, Input } from '@angular/core';
import { InfiniteCarouselType } from '../../../../models/InfiniteCarouselType';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-infinite-carousel',
  templateUrl: './infinite-carousel.component.html',
  styleUrl: './infinite-carousel.component.scss'
})
export class InfiniteCarouselComponent {
  @Input() carouselList: InfiniteCarouselType[] = [];

  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay:true,
    autoplayTimeout:1500,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
    },
    nav: false

  }
}
