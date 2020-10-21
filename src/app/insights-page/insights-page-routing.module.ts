import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsightsPagePage } from './insights-page.page';

const routes: Routes = [
  {
    path: '',
    component: InsightsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsightsPagePageRoutingModule {}
