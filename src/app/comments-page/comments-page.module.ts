import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentsPagePageRoutingModule } from './comments-page-routing.module';

import { CommentsPagePage } from './comments-page.page';
import { LogNavButtonModule } from '../components/log-nav-button/log-nav-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommentsPagePageRoutingModule,
    LogNavButtonModule,
  ],
  declarations: [CommentsPagePage]
})
export class CommentsPagePageModule { }
