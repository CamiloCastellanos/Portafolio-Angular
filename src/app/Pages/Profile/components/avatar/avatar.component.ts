import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class AvatarComponent {
  @Input() imageUrl: string = '';
  @Input() size: number = 100;
  @Input() focusX: number = 50;
  @Input() focusY: number = 50;

  get containerStyle() {
    return {
      width: `${this.size}px`,
      height: `${this.size}px`,
    };
  }

  get imageStyle() {
    return {
      'object-position': `${this.focusX}% ${this.focusY}%`
    };
  }
}
