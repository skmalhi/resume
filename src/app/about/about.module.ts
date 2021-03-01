import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [AboutRoutingModule.components],
  imports: [SharedModule, AboutRoutingModule, FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class AboutModule {}
