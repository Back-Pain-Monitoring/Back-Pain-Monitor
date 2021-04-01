import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimePagePage } from './datetime-page.page';

const routes: Routes = [
  {
    path: '',
    component: DatetimePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatetimePagePageRoutingModule { }
