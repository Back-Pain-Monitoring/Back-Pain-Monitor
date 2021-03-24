import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedflagsPagePageRoutingModule } from './redflags-page-routing.module';

import { RedflagsPagePage } from './redflags-page.page';

import { LogNavButtonModule } from '../components/log-nav-button/log-nav-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedflagsPagePageRoutingModule,
    LogNavButtonModule,
  ],
  declarations: [RedflagsPagePage]
})
export class RedflagsPagePageModule { }
