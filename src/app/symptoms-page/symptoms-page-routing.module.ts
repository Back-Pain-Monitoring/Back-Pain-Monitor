import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomsPagePage } from './symptoms-page.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomsPagePageRoutingModule {}
