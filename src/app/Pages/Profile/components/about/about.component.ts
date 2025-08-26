import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    standalone: false
})
export class AboutComponent {
  @Input() lang: string = "es";
  email = 'camilo.castellanos.puentes@gmail.com';
  textTooltip = "";

  copyEmail() {
    navigator.clipboard.writeText(this.email);
    this.textTooltip = "Copiado"
    setTimeout(() => {
      this.textTooltip = ""
    }, 2500)
  }
}

