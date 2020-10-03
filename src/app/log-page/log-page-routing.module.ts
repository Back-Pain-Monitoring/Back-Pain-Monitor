import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogPagePage } from './log-page.page';

const routes: Routes = [
  {
    path: '',
    component: LogPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogPagePageRoutingModule {}
