import { Component, Input } from '@angular/core';
import { Certificate } from '../../../../models/certificate';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'learning-desktop',
  standalone: true,
  templateUrl: './learning-desktop.component.html',
  styleUrl: './learning-desktop.component.scss',
  imports: [CommonModule],
})
export class LearningDesktopComponent {
  @Input() certificateList: Certificate[] = []
}
