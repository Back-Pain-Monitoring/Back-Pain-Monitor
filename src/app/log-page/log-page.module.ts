import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogPagePageRoutingModule } from './log-page-routing.module';

import { LogPagePage } from './log-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogPagePageRoutingModule
  ],
  declarations: [LogPagePage]
})
export class LogPagePageModule {}
