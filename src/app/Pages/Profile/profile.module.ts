import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileRoutingModule } from './profile.routes';
import { ProfileComponent } from './profile/profile.component';
import { ToolsLanguagesModule } from '../../shared/components/tools-languages/tools-languages.module';
import { AvatarComponent } from './components/avatar/avatar.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CurriculumVitaeComponent } from './components/curriculum-vitae/curriculum-vitae.component';

@NgModule({
  declarations: [ProfileComponent, AvatarComponent, AboutComponent, ExperienceComponent, CurriculumVitaeComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    TranslateModule,
    ToolsLanguagesModule
  ]
})
export class ProfileModule { }
