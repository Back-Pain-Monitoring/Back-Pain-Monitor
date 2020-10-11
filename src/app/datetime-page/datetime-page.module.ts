import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimePagePageRoutingModule } from './datetime-page-routing.module';

import { DatetimePagePage } from './datetime-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimePagePageRoutingModule
  ],
  declarations: [DatetimePagePage]
})
export class DatetimePagePageModule { }
