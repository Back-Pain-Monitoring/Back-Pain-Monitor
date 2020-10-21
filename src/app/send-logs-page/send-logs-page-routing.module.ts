import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendLogsPagePage } from './send-logs-page.page';

const routes: Routes = [
  {
    path: '',
    component: SendLogsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendLogsPagePageRoutingModule {}
