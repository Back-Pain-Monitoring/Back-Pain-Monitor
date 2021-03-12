import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomsPagePageRoutingModule } from './symptoms-page-routing.module';

import { SymptomsPagePage } from './symptoms-page.page';

import { LogNavButtonComponent } from '../components/log-nav-button/log-nav-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomsPagePageRoutingModule
  ],
  exports: [LogNavButtonComponent],
  declarations: [SymptomsPagePage]
})
export class SymptomsPagePageModule { }
