import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faDribbble, faInstagram, faLinkedin, faPinterest, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [HomeRoutingModule.components],
  imports: [SharedModule, HomeRoutingModule, FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class HomeModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(faLinkedin, faPinterestP, faTwitter, faInstagram, faDribbble);
  }
}
