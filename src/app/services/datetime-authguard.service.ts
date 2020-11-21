import { Injectable } from '@angular/core';
import { Router, CanDeactivate } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { LogDataService } from './log-data.service';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DatetimeAuthguardService implements CanDeactivate<CanComponentDeactivate> {

  constructor(private router: Router, private dataService: LogDataService, private alertCtrl: AlertController) { }

  canDeactivate(component: CanComponentDeactivate): boolean {
    console.log(`date: ${this.dataService.currentLogDatetime}, type ${typeof (this.dataService.currentLogDatetime)}`);
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
