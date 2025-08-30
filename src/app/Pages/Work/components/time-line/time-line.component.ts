import { Component, computed, Input, signal } from '@angular/core';
import { Work } from '../../../../models/work';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrl: './time-line.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class TimeLineComponent {
  @Input() workList = signal<Work[]>([])
  @Input() language: string = "es";

    sortedWorkList = computed(() =>
    [...this.workList()].sort((a, b) => b.order - a.order)
  );
}
