import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  @Input() lang: string = "es";
  typographyFrontEndTitle = "font-weight-600 typography-lora";
  typographyFrontEnd = "font-weight-500 typography-open-sans";
  typographyBackEndTitle = "font-weight-600 typography-lora";
  typographyBackEnd = "font-weight-500 typography-open-sans";
}
