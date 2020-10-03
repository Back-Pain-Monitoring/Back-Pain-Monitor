import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedflagsPagePageRoutingModule } from './redflags-page-routing.module';

import { RedflagsPagePage } from './redflags-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedflagsPagePageRoutingModule
  ],
  declarations: [RedflagsPagePage]
})
export class RedflagsPagePageModule {}
