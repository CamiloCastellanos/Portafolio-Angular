import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';

@NgModule({
  declarations: [ContactInformationComponent],
  exports:[ContactInformationComponent],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
