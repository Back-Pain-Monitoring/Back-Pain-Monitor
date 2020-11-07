import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { LogDataService } from '../services/log-data.service';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.page.html',
  styleUrls: ['./medication.page.scss'],
})
export class MedicationPage implements OnInit {
  date: Date;
  med_type: string;
  med_comment: string;

  constructor(private alertCtrl: AlertController, private navCtrl: NavController, public dataService: LogDataService) {

  }

  ngOnInit() {
  }

  // Goes back to home page -- Thanks to Leo
  backToHome() {
    this.navCtrl.navigateRoot('/tabs/home')
  }

  // Submit Medication Use
  submitMedication(): void {
    this.alertCtrl.create({
      message: "Your Medication Has Been Logged!",
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.backToHome();
          }
        }
      ]
    }).then((prompt) => {
      prompt.present();
    });
  }

}
