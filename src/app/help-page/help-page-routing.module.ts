import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpPagePage } from './help-page.page';

const routes: Routes = [
  {
    path: '',
    component: HelpPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpPagePageRoutingModule {}
