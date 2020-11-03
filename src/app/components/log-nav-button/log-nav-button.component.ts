import { Component, Input, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-log-nav-button',
  templateUrl: './log-nav-button.component.html',
  styleUrls: ['./log-nav-button.component.scss'],
})
export class LogNavButtonComponent implements OnInit {

  @Input() direction: "forward" | "backward";
  @Input() link: string;

  constructor(private alertCtrl: AlertController, private navCtrl: NavController) { }

  ngOnInit() { }

  failedValidate(msg: string) {
    this.alertCtrl.create({
      message: msg,
      buttons: ['OK']
    }).then((prompt) => {
      prompt.present();
    });
  }

  navigate() {
    if (this.direction === "forward") {
      this.navCtrl.navigateForward(this.link);
    } else {
      this.navCtrl.navigateBack(this.link);
    }
  }

}
