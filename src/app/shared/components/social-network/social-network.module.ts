import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialNetworkComponent } from './social-network/social-network.component';
import { ContactModule } from '../contact/contact.module';



@NgModule({
  declarations: [SocialNetworkComponent],
  exports: [SocialNetworkComponent],
  imports: [
    CommonModule,
    ContactModule
  ]
})
export class SocialNetworkModule { }
