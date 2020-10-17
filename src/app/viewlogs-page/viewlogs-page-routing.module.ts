import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewlogsPagePage } from './viewlogs-page.page';

const routes: Routes = [
  {
    path: '',
    component: ViewlogsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewlogsPagePageRoutingModule {}
