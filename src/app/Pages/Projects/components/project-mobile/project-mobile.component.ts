import { Component, Input } from '@angular/core';
import { Project } from '../../../../models/Project';

@Component({
    selector: 'app-project-mobile',
    templateUrl: './project-mobile.component.html',
    styleUrl: './project-mobile.component.scss',
    standalone: false
})
export class ProjectMobileComponent {
  @Input() projectList: Project[] = [];
  @Input() language: string = "es";
}
