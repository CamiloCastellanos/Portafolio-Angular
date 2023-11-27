import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkRoutingModule } from './work.routes';
import { TranslateModule } from '@ngx-translate/core';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [WorkComponent],
  imports: [
    CommonModule,
    TranslateModule,
    WorkRoutingModule,
  ]
})

export class WorkModule { }
