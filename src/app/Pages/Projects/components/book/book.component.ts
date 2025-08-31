import { Component, Input, signal } from '@angular/core';
import { Project } from '../../../../models/project';
import { TranslateTextPipe } from '../../../../shared/pipe/translate-text.pipe';

@Component({
  selector: 'project-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  standalone: true,
  imports: [TranslateTextPipe]
})
export class BookComponent {
  @Input() projectList = signal<Project[]>([]);
  @Input() language: string = "es";
}
