import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { LogDataService } from '../services/log-data.service';

@Component({
  selector: 'app-datetime-page',
  templateUrl: './datetime-page.page.html',
  styleUrls: ['./datetime-page.page.scss'],
})
export class DatetimePagePage implements OnInit {

  @ViewChild('backButton', { static: false }) backButton;
  @ViewChild('forwardButton', { static: false }) forwardButton;

  datetime: string;

  constructor(public dataService: LogDataService, private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.updateUIFromLog();
  }

  updateLog() {
    if (this.datetime) {
      this.dataService.currentLogDatetime = new Date(this.datetime);
    }
  }

  updateUIFromLog() {
    if (this.dataService.currentLogDatetime != undefined) {
      this.datetime = this.dataService.currentLogDatetime.toISOString();
    }
  }

  testDataBinding() {
    this.datetime = new Date().toISOString();
  }

  navigateForward() {
    this.updateLog();
    this.forwardButton.navigate();
  }

}
