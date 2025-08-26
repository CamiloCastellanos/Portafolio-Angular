import { Component, Input } from '@angular/core';
import { Project } from '../../../../models/Project';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrl: './book.component.scss',
    standalone: false
})
export class BookComponent {
  @Input() projectList: Project[] = [];
  @Input() language: string = "es";
}
