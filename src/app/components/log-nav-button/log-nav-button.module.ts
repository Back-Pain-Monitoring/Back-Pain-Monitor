import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { LogNavButtonComponent } from './log-nav-button.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [
    LogNavButtonComponent,
  ],
  exports: [
    LogNavButtonComponent,
  ]
})
export class LogNavButtonModule { }