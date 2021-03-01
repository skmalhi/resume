import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout1Component } from '@app/shared/layouts/layout1/layout1.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: Layout1Component,
    children: [
      {
        path: '',
        component: HomeComponent,
        // canActivate: [AuthGuardService],
        data: { title: '' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
  static components = [HomeComponent];
}
