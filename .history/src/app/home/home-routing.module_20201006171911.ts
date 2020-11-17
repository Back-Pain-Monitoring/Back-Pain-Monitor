import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodymapPagePage } from '../bodymap-page/bodymap-page.page';
import { CommentsPagePage } from '../comments-page/comments-page.page';
import { DatetimePagePage } from '../datetime-page/datetime-page.page';
import { RedflagsPagePage } from '../redflags-page/redflags-page.page';
import { SymptomsPagePage } from '../symptoms-page/symptoms-page.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  // {
  //   path: 'datetime',
  //   component: DatetimePagePage,
  // },
  // {
  //   path: 'bodymap',
  //   component: BodymapPagePage,
  // },
  // {
  //   path: 'symptoms',
  //   component: SymptomsPagePage,
  // },
  // {
  //   path: 'redflags',
  //   component: RedflagsPagePage,
  // },
  // {
  //   path: 'comments',
  //   component: CommentsPagePage,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }