import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MedicationDataService } from './medication-data.service';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})

export class MedicationAuthguardService {

  constructor(private router: Router, private dataService: MedicationDataService, private alertCtrl: AlertController) { }

  canDeactivate(component: CanComponentDeactivate): boolean {
    console.log(`date: ${this.dataService.currentMedDateTime}, type ${typeof (this.dataService.currentMedDateTime)}`);
    if (!this.dataService.currentMedDateTime) {
      this.alertCtrl.create({
        message: 'Please provide a value for date',
        buttons: ['OK']
      }).then((prompt) => {
        prompt.present();
      });
      return false;
    }
    if (!this.dataService.currentMedMed_type) {
      this.alertCtrl.create({
        message: 'Please provide a medication type',
        buttons: ['OK']
      }).then((prompt) => {
        prompt.present();
      });
      return false;
    }
    return true;
  }
}
