import { Component, computed, Input, signal } from '@angular/core';
import { Work } from '../../../../models/work';
import { CommonModule } from '@angular/common';
import { TranslateTextPipe } from '../../../../shared/pipe/translate-text.pipe';

@Component({
  selector: 'work-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  standalone: true,
  imports: [CommonModule, TranslateTextPipe]
})
export class CarouselComponent {
  @Input() language: string = 'es';
  @Input() workList = signal<Work[]>([]);
  @Input() textDescription: string = "Cargo 🧑🏼‍💻";
  sortedWorkList = computed(() =>
    [...this.workList()].sort((a, b) => b.order - a.order)
  );
  textButton = this.language == 'es' ? 'Página de la Empresa' : 'Company Page'

  ngOnChanges() {
    this.textButton = this.language == 'es' ? 'Página de la Empresa' : 'Company Page'
  }

}
