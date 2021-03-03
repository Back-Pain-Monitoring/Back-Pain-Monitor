import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MakeLogAuthguardService implements CanActivate {

  constructor(private router: Router, private authSvc: AuthService, private alertCtrl: AlertController) { }

  canActivate(): boolean {
    if (!this.authSvc.uidSubj.value) {
      this.alertCtrl.create({
        message: 'You need to sign in before you can report pain or medication use.',
        buttons: ['OK']
      }).then((prompt) => {
        prompt.present();
      });
      return false;
    }
    return true;
  }
}
