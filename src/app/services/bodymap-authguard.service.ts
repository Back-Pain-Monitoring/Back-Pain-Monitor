import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LogDataService } from './log-data.service';

@Injectable({
  providedIn: 'root'
})
export class BodymapAuthguardService implements CanActivate {

  constructor(private router: Router, private dataService: LogDataService, private alertCtrl: AlertController) { }

  canActivate(): boolean {
    if (this.dataService.currentLogBodyParts.length < 1) {
      this.alertCtrl.create({
        message: 'Please select one or more body parts',
        buttons: ['OK']
      }).then((prompt) => {
        prompt.present();
      });
      return false;
    }
    return true;
  }
}
