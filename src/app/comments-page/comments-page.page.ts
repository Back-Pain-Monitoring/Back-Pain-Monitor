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
  submit_button_label: string = "Submit";

  constructor(public dataService: LogDataService, private alertCtrl: AlertController, private navCtrl: NavController) {
  }

  ngOnInit() {
    this.updateUIFromLog();
    if (this.dataService.isEditing()) {
      this.submit_button_label = "Update";
    }
  }

  // Check if there exists redflags symptom or not.
  makeAlert() {
    if (this.dataService.currentLogRedflag_symptoms.includes('True') != true) {
      this.redflagsCase();
    } else {
      this.nonredflagsCase();
    }
  }

  // funciton to go back to homepage
  backToHome() {
    this.updateLog();
    this.dataService.submitLogEntry();  // note that submitLogEntry will edit the log entry instead if the dataservice indicates the log is being edited
    this.navCtrl.navigateRoot('/tabs/home');
  }

  // In case there is no redflag symptoms
  redflagsCase(): void {
    this.alertCtrl.create({
      message: 'Your log has been submitted!',
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

  // In case there exists redflags symptoms
  nonredflagsCase(): void {
    this.alertCtrl.create({
      message: 'Your log has been submitted!<br><br>Please be advised!<br>- Numbness<br>- Inability to walk<br>-  Losing weight<br>-  Losing bladder control.<br><br>These are considered as red-flag symptoms which can be highly critical to health issues! <br><br> Seek medical help immediately!',
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

  updateLog() {
    this.dataService.currentLogComment = this.comment;
    this.dataService.printLogEntry();
  }

  updateUIFromLog() {
    this.comment = this.dataService.currentLogComment;
  }
}