import { Component, Input, signal } from '@angular/core';
import { Project } from '../../../../models/project';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  standalone: true,
})
export class BookComponent {
  @Input() projectList = signal<Project[]>([]);
    @Input() language: string = "es";
}
