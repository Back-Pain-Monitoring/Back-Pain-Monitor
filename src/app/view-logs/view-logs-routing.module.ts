import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewLogsPage } from './view-logs.page';

const routes: Routes = [
  {
    path: '',
    component: ViewLogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewLogsPageRoutingModule {}
