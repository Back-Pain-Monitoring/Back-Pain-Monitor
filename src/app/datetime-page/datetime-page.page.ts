import { Component, OnInit } from '@angular/core';

import { LogDataService } from '../services/log-data.service';

@Component({
  selector: 'app-datetime-page',
  templateUrl: './datetime-page.page.html',
  styleUrls: ['./datetime-page.page.scss'],
})
export class DatetimePagePage implements OnInit {

  datetime: string;

  constructor(public dataService: LogDataService) {
  }

  updateLog() {
    this.dataService.currentLogDatetime = new Date(this.datetime);
  }

  updateUIFromLog() {
    this.datetime = this.dataService.currentLogDatetime.toISOString();
  }

  testDataBinding() {
    this.datetime = new Date().toISOString();
  }

  ngOnInit() {
    this.updateUIFromLog();
  }

}
