import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TypeWriterComponent } from '../type-writer/type-writer.component';

@Component({
  selector: 'home-desktop',
  standalone: true,
  templateUrl: './home-desktop.component.html',
  styleUrl: './home-desktop.component.scss',
  imports: [
    CommonModule,
    TranslateModule,
    NgOptimizedImage,
    TypeWriterComponent,
  ]
})

export class HomeDesktopComponent {
  @Input() phrase: string[] = [];
  @Input() typographyTitle = "typography-lora font-weight-600";
  @Input() typographyText = "typography-open-sans font-weight-500";
  @Input() typographyTypeWriter = "typography-lora font-weight-600";
}
