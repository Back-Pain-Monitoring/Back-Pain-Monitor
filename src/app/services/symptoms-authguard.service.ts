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
    console.log("checking candeactivate");
    const missingFields: string[] = [];
    if (this.dataService.currentLogIntensity === undefined) {
      missingFields.push("Intensity");
    }
    if (this.dataService.currentLogType === undefined) {
      missingFields.push("Pain type");
    }
    if (this.dataService.currentLogTimesBefore === undefined) {
      missingFields.push("How many times have you experienced this pain before");
    }
    if (this.dataService.currentLogMobility === undefined || this.dataService.currentLogMobility.length === 0) {
      missingFields.push("When do you feel pain");
    }
    if (this.dataService.currentLogIs_constant === undefined) {
      missingFields.push("Constant or intermittent");
    }

    if (missingFields.length > 0) {
      this.alertCtrl.create({
        message: `Please provide values for the following fields:<br>
                  <ul>
                    ${missingFields.map(item => `<li>${item}</li>`).join('')}
                  </ul>`,
        buttons: ['OK']
      }).then((prompt) => {
        prompt.present();
      });
      return false;
    }
    return true;
  }
}
