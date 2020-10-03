import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedflagsPagePage } from './redflags-page.page';

const routes: Routes = [
  {
    path: '',
    component: RedflagsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedflagsPagePageRoutingModule {}
