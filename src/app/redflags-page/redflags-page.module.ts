import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedflagsPagePageRoutingModule } from './redflags-page-routing.module';

import { RedflagsPagePage } from './redflags-page.page';

import { LogNavButtonComponent } from '../components/log-nav-button/log-nav-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedflagsPagePageRoutingModule
  ],
  declarations: [RedflagsPagePage, LogNavButtonComponent]
})
export class RedflagsPagePageModule { }
