import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout1Component } from './layouts/layout1/layout1.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faBriefcase,
  faComments,
  faGraduationCap,
  faHome,
  faTimes,
  faTimesCircle,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Layout1Component, SidebarComponent, FooterComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule, ReactiveFormsModule],
  exports: [
    Layout1Component,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(
      faHome,
      faUser,
      faBriefcase,
      faGraduationCap,
      faComments,
      faTimes,
      faTimesCircle
    );
  }
}
