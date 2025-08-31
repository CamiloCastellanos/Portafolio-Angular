import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'profile-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule
  ]
})
export class AboutComponent {
  @Input() lang: string = "es";
  @Input() tooltipCopy: string = "Copy";
  email = 'camilo.castellanos.puentes@gmail.com';

  copyEmail() {
    navigator.clipboard.writeText(this.email);
  }
}

