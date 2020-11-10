import { ANALYZE_FOR_ENTRY_COMPONENTS, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

import { IonicModule } from '@ionic/angular';

import { ViewLogsPageRoutingModule } from './view-logs-routing.module';

import { ViewLogsPage } from './view-logs.page';
import { FilterModalPageComponent } from '../filter-modal/filter-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ViewLogsPageRoutingModule,
    MatExpansionModule
  ],
  declarations: [ViewLogsPage, FilterModalPageComponent],
  entryComponents: [FilterModalPageComponent]
})
export class ViewLogsPageModule { }
