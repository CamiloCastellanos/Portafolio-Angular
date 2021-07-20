import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkRoutingModule } from './work.routes';
import { WorkComponent } from './components/work/work.component';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    WorkComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    WorkRoutingModule
  ]
})
export class WorkModule { }
