import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './services/contact.service';
import { AppService } from './services/app.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  exports: [HttpClientModule],
  providers: [ContactService, AppService],
})
export class CoreModule {}
