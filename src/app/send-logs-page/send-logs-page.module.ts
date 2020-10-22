import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendLogsPagePageRoutingModule } from './send-logs-page-routing.module';

import { SendLogsPagePage } from './send-logs-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendLogsPagePageRoutingModule
  ],
  declarations: [SendLogsPagePage]
})
export class SendLogsPagePageModule {}
