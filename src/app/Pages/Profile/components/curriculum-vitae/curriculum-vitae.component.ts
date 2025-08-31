import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'profile-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrl: './curriculum-vitae.component.scss',
  standalone: true,
  imports: [TranslateModule]
})
export class CurriculumVitaeComponent {
  @Input() lang: string = "es";
  curriculumVitaeEn = "https://drive.google.com/file/d/1uA8rPnOOOQmZM9FJQgI1m5DXGEt_MpN5/view?usp=drive_link";
  curriculumVitaeEs = "https://drive.google.com/file/d/1iiOjGLteQNDpTcoNLteAJIJM5gcYWjq7/view?usp=drive_link";
}
