import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [ContactRoutingModule.components],
  imports: [SharedModule, ContactRoutingModule, FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class ContactModule {}
