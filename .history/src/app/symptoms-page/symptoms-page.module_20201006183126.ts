import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomsPagePageRoutingModule } from './symptoms-page-routing.module';

import { SymptomsPagePage } from './symptoms-page.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomsPagePageRoutingModule
  ],
  declarations: [SymptomsPagePage]
})
export class SymptomsPagePageModule { }
