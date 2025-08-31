import { Component, computed, Input, signal } from '@angular/core';
import { Work } from '../../../../models/work';
import { CommonModule } from '@angular/common';
import { TranslateTextPipe } from '../../../../shared/pipe/translate-text.pipe';

@Component({
  selector: 'work-time-line',
  templateUrl: './time-line.component.html',
  styleUrl: './time-line.component.scss',
  standalone: true,
  imports: [CommonModule, TranslateTextPipe]
})
export class TimeLineComponent {
  @Input() workList = signal<Work[]>([])
  @Input() language: string = "es";
  @Input() textDescription: string = "Cargo 🧑🏼‍💻";
  sortedWorkList = computed(() =>
    [...this.workList()].sort((a, b) => b.order - a.order)
  );
}
