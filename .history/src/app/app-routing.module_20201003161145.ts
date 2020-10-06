import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'datetime-page',
    loadChildren: () => import('./datetime-page/datetime-page.module').then( m => m.DatetimePagePageModule)
  },
  {
    path: 'bodymap-page',
    loadChildren: () => import('./bodymap-page/bodymap-page.module').then( m => m.BodymapPagePageModule)
  },
  {
    path: 'symptoms-page',
    loadChildren: () => import('./symptoms-page/symptoms-page.module').then( m => m.SymptomsPagePageModule)
  },
  {
    path: 'comments-page',
    loadChildren: () => import('./comments-page/comments-page.module').then( m => m.CommentsPagePageModule)
  },
  {
    path: 'redflags-page',
    loadChildren: () => import('./redflags-page/redflags-page.module').then( m => m.RedflagsPagePageModule)
  },
  {
    path: 'log-page',
    loadChildren: () => import('./log-page/log-page.module').then( m => m.LogPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
