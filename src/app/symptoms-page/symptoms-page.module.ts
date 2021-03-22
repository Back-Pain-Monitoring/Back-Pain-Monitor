import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomsPagePageRoutingModule } from './symptoms-page-routing.module';

import { LogNavButtonModule } from '../components/log-nav-button/log-nav-button.module';

import { SymptomsPagePage } from './symptoms-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomsPagePageRoutingModule,
    LogNavButtonModule,
  ],
  declarations: [SymptomsPagePage]
})
export class SymptomsPagePageModule { }
