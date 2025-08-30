import { Component, computed, Input, signal } from '@angular/core';
import { Work } from '../../../../models/work';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class CarouselComponent {
  @Input() language: string = 'es';
  @Input() workList = signal<Work[]>([]);
  sortedWorkList = computed(() =>
    [...this.workList()].sort((a, b) => b.order - a.order)
  );
  textButton = this.language == 'es' ? 'Página de la Empresa' : 'Company Page'
  ngOnChanges() {
    this.textButton = this.language == 'es' ? 'Página de la Empresa' : 'Company Page'
  }

}
