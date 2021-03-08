import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodymapPagePageRoutingModule } from './bodymap-page-routing.module';

import { BodymapPagePage } from './bodymap-page.page';
import { LogNavButtonModule } from '../components/log-nav-button/log-nav-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BodymapPagePageRoutingModule,
    LogNavButtonModule,
  ],
  declarations: [BodymapPagePage]
})
export class BodymapPagePageModule { }
