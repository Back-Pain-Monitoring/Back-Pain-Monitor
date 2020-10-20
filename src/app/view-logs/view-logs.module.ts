import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewLogsPageRoutingModule } from './view-logs-routing.module';

import { ViewLogsPage } from './view-logs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewLogsPageRoutingModule
  ],
  declarations: [ViewLogsPage]
})
export class ViewLogsPageModule {}
