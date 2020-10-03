import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodymapPagePage } from './bodymap-page.page';

const routes: Routes = [
  {
    path: '',
    component: BodymapPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodymapPagePageRoutingModule {}
