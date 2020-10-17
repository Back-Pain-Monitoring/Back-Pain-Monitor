import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewlogsPagePageRoutingModule } from './viewlogs-page-routing.module';

import { ViewlogsPagePage } from './viewlogs-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewlogsPagePageRoutingModule
  ],
  declarations: [ViewlogsPagePage]
})
export class ViewlogsPagePageModule {}
