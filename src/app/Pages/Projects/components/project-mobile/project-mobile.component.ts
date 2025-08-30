import { Component, Input, signal } from '@angular/core';
import { Project } from '../../../../models/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-mobile',
  templateUrl: './project-mobile.component.html',
  styleUrl: './project-mobile.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class ProjectMobileComponent {
  @Input() projectList = signal<Project[]>([]);
  @Input() language: string = "es";
}
