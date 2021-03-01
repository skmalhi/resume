import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { ExperienceRoutingModule } from './experience-routing.module';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@app/shared/shared.module';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [ExperienceRoutingModule.components],
  imports: [SharedModule, ExperienceRoutingModule, FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class ExperienceModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(faGraduationCap, faBriefcase);
  }
}
