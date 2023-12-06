import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-redirect-button',
  templateUrl: './redirect-button.component.html',
  styleUrl: './redirect-button.component.scss'
})
export class RedirectButtonComponent {
  @Input() buttonText: string = 'See more - Code - Demo - See more -';
  @Input() href: string = '#'
  @Input() width: string = '120px'
  @Input() height: string = '120px'
}
