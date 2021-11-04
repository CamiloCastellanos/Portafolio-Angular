import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkRoutingModule } from './work.routes';
import { WorkComponent } from './components/work/work.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    WorkComponent
  ],
  imports: [
    CommonModule,
    WorkRoutingModule,
    SharedModule
  ]
})
export class WorkModule { }
