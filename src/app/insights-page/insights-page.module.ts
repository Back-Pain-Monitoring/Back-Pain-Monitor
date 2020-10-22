import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsightsPagePageRoutingModule } from './insights-page-routing.module';

import { InsightsPagePage } from './insights-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsightsPagePageRoutingModule
  ],
  declarations: [InsightsPagePage]
})
export class InsightsPagePageModule {}
