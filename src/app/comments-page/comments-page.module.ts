import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogNavButtonModule } from '../components/log-nav-button/log-nav-button.module';

import { CommentsPagePageRoutingModule } from './comments-page-routing.module';

import { CommentsPagePage } from './comments-page.page';

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
