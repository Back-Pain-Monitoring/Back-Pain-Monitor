import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { LogDataService } from './log-data.service';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SymptomsAuthguardService {

  constructor(private router: Router, private dataService: LogDataService, private alertCtrl: AlertController) { }

  canDeactivate(component: CanComponentDeactivate): boolean {
    const missingFields: string[] = [];
    if (this.dataService.currentLogIntensity === undefined) {
      missingFields.push("Intensity");
    }
    if (this.dataService.currentLogType === undefined) {
      missingFields.push("Pain type");
    }
    if (this.dataService.currentLogIs_constant === undefined) {
      missingFields.push("Constant or intermittent");
    }

    if (!this.dataService.currentLogDatetime) {
      this.alertCtrl.create({
        message: 'Please provide a value for date',
        buttons: ['OK']
      }).then((prompt) => {
        prompt.present();
      });
      return false;
    }
    return true;
  }
}
