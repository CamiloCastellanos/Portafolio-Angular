import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ToolsLanguagesComponent } from '../../../../shared/components/tools-languages/tools-languages/tools-languages.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    ToolsLanguagesComponent
  ]
})
export class ExperienceComponent {
  @Input() lang: string = "es";
  typographyFrontEndTitle = "font-weight-600 typography-lora";
  typographyFrontEnd = "font-weight-500 typography-open-sans";
  typographyBackEndTitle = "font-weight-600 typography-lora";
  typographyBackEnd = "font-weight-500 typography-open-sans";
}
