import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileRoutingModule } from './profile.routes';
import { ProfileComponent } from './profile/profile.component';
import { ToolsLanguagesModule } from '../../shared/components/tools-languages/tools-languages.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    TranslateModule,
    ToolsLanguagesModule
  ]
})
export class ProfileModule { }
