import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrl: './curriculum-vitae.component.scss'
})
export class CurriculumVitaeComponent {
  @Input() lang: string = "es";
  curriculumVitaeEn = "https://drive.google.com/file/d/1uA8rPnOOOQmZM9FJQgI1m5DXGEt_MpN5/view?usp=drive_link";
  curriculumVitaeEs = "https://drive.google.com/file/d/1iiOjGLteQNDpTcoNLteAJIJM5gcYWjq7/view?usp=drive_link";
}
