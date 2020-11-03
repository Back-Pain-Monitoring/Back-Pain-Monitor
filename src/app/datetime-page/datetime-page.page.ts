import { Component, OnInit, ViewChild } from '@angular/core';

import { LogDataService } from '../services/log-data.service';

@Component({
  selector: 'app-datetime-page',
  templateUrl: './datetime-page.page.html',
  styleUrls: ['./datetime-page.page.scss'],
})
export class DatetimePagePage implements OnInit {

  @ViewChild('forwardButton', { static: false }) forwardButton;

  datetime: string;

  constructor(public dataService: LogDataService) {
  }

  ngOnInit() {
    this.updateUIFromLog();
  }

  updateLog() {
    this.dataService.currentLogDatetime = new Date(this.datetime);
  }

  updateUIFromLog() {
    if (this.dataService.currentLogDatetime != undefined) {
      this.datetime = this.dataService.currentLogDatetime.toISOString();
    }
  }

  testDataBinding() {
    this.datetime = new Date().toISOString();
  }

  validateData() {
    return this.datetime !== undefined
  }

  navigateForward() {
    if (!this.validateData()) {
      this.forwardButton.failedValidate("Please provide a value for date");
    } else {
      this.forwardButton.navigate();
    }
  }

}
