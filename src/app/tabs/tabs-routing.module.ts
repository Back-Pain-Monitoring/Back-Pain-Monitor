import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakeLogAuthguardService } from '../services/make-log-authguard.service';
import { MedicationAuthguardService } from '../services/medication-authguard.service';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'sendlogs',
        loadChildren: () => import('../send-logs-page/send-logs-page.module').then(m => m.SendLogsPagePageModule)
      },
      {
        path: 'viewlogs',
        loadChildren: () => import('../view-logs/view-logs.module').then(m => m.ViewLogsPageModule)
      },
      {
        path: 'insights',
        loadChildren: () => import('../insights-page/insights-page.module').then(m => m.InsightsPagePageModule)
      },
      {
        path: 'help',
        loadChildren: () => import('../help-page/help-page.module').then(m => m.HelpPagePageModule)
      },
      {
        path: 'medication',
        loadChildren: () => import('../medication/medication.module').then(m => m.MedicationPageModule),
        canActivate: [MakeLogAuthguardService], canDeactivate: [MedicationAuthguardService]
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class TabsPageRoutingModule { }

