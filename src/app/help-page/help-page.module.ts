import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpPagePageRoutingModule } from './help-page-routing.module';

import { HelpPagePage } from './help-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpPagePageRoutingModule
  ],
  declarations: [HelpPagePage]
})
export class HelpPagePageModule {}
