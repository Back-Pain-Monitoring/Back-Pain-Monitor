import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogNavButtonComponent } from '../components/log-nav-button/log-nav-button.component';

import { BodymapPagePageRoutingModule } from './bodymap-page-routing.module';

import { BodymapPagePage } from './bodymap-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BodymapPagePageRoutingModule
  ],
  declarations: [BodymapPagePage, LogNavButtonComponent]
})
export class BodymapPagePageModule { }
