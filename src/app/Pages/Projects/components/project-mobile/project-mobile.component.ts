import { Component, Input, signal } from '@angular/core';
import { Project } from '../../../../models/project';
import { CommonModule } from '@angular/common';
import { TranslateTextPipe } from '../../../../shared/pipe/translate-text.pipe';

@Component({
  selector: 'project-mobile',
  templateUrl: './project-mobile.component.html',
  styleUrl: './project-mobile.component.scss',
  standalone: true,
  imports: [CommonModule, TranslateTextPipe]
})
export class ProjectMobileComponent {
  @Input() projectList = signal<Project[]>([]);
  @Input() language: string = "es";
  @Input() textDemo: string = "Ver Demo";
  @Input() textCode: string = "Ver Código";
}
