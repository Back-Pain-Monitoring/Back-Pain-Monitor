import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimePagePageRoutingModule } from './datetime-page-routing.module';

import { LogNavButtonModule } from '../components/log-nav-button/log-nav-button.module';

import { DatetimePagePage } from './datetime-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimePagePageRoutingModule,
    LogNavButtonModule,
  ],
  declarations: [DatetimePagePage]
})
export class DatetimePagePageModule { }
