import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LogDataService } from './log-data.service';

@Injectable({
  providedIn: 'root'
})
export class DatetimeAuthguardService implements CanActivate {

  constructor(private router: Router, private dataService: LogDataService, private alertCtrl: AlertController) { }

  canActivate(): boolean {
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
