import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [ServicesRoutingModule.components],
  imports: [SharedModule, ServicesRoutingModule, FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class ServicesModule {}
