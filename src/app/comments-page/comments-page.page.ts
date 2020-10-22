import { Component, OnInit } from '@angular/core';

import { LogDataService } from '../services/log-data.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.page.html',
  styleUrls: ['./comments-page.page.scss'],
})
export class CommentsPagePage implements OnInit {

  comment: string;

  constructor(public dataService: LogDataService, private alertCtrl: AlertController, private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  // Check if there exists redflags symptom or not.
  makeAlert() {
    if (this.dataService.currentLogRedflag_symptoms.includes('True') != true ) {
      this.redflagsCase();
    } else {
      this.nonredflagsCase();
    }
  }

  // funciton to go back to homepage
  backToHome() {
    this.updateLog();
    this.dataService.submitLogEntry();
    this.navCtrl.navigateRoot('/home');
  }

  // In case there is no redflag symptoms
  redflagsCase(): void {
    this.alertCtrl.create({
      message: 'Your log has been submitted!',
      inputs: [
        {
          type: 'text',
          name: 'name'
        }
      ],
      buttons: [
        {
          text: 'Okay',
          handler: ()=> {
            this.backToHome();
          }
        }
      ]
    }).then((prompt) => {
      prompt.present();
    });
  }

  // In case there exists redflags symptoms
  nonredflagsCase(): void {
    this.alertCtrl.create({
      message: '- Numbnes<br>- Inability to walk<br>-  Losing weight<br>-  Losing bladder control.<br><br>These are considered as red-flag symptoms which can be highly critical to health issues! <br><br> It is highly recommended to seek medical help immediately!',
      inputs: [
        {
          type: 'text',
          name: 'name'
        }
      ],
      buttons: [
        {
          text: 'Okay',
          handler: ()=> {
            this.backToHome();
          }
        }
      ]
    }).then((prompt) => {
      prompt.present();
    });
  }

  updateLog() {
    this.dataService.currentLogComment = this.comment;
    this.dataService.printLogEntry();
  }

  updateUIFromLog() {
    this.comment = this.dataService.currentLogComment;
  }
}