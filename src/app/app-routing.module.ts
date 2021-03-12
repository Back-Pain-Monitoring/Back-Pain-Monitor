import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DatetimeAuthguardService } from './services/datetime-authguard.service';
import { SymptomsAuthguardService } from './services/symptoms-authguard.service';
import { MakeLogAuthguardService } from './services/make-log-authguard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'medication',
  //   loadChildren: () => import('./medication/medication.module').then(m => m.MedicationPageModule),
  //   canActivate: [MakeLogAuthguardService], canDeactivate: [MedicationAuthguardService]
  // },
  {
    path: 'datetime',
    loadChildren: () => import('./datetime-page/datetime-page.module').then(m => m.DatetimePagePageModule),
    canActivate: [MakeLogAuthguardService], canDeactivate: [DatetimeAuthguardService],
  },
  {
    path: 'bodymap',
    loadChildren: () => import('./bodymap-page/bodymap-page.module').then(m => m.BodymapPagePageModule)
  },
  {
    path: 'symptoms',
    loadChildren: () => import('./symptoms-page/symptoms-page.module').then(m => m.SymptomsPagePageModule),
    canDeactivate: [SymptomsAuthguardService]
  },
  {
    path: 'comments',
    loadChildren: () => import('./comments-page/comments-page.module').then(m => m.CommentsPagePageModule)
  },
  {
    path: 'redflags',
    loadChildren: () => import('./redflags-page/redflags-page.module').then(m => m.RedflagsPagePageModule)
  },
  {
    path: 'view-logs',
    loadChildren: () => import('./view-logs/view-logs.module').then(m => m.ViewLogsPageModule)
  },
  {
    path: 'log',
    loadChildren: () => import('./log-page/log-page.module').then(m => m.LogPagePageModule)
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
