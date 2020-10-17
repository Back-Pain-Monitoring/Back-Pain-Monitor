import { Component, OnInit } from '@angular/core';

import { LogDataService } from '../services/log-data.service';

@Component({
  selector: 'app-datetime-page',
  templateUrl: './datetime-page.page.html',
  styleUrls: ['./datetime-page.page.scss'],
})
export class DatetimePagePage implements OnInit {

  datetime: Date;

  constructor(public dataService: LogDataService) {
  }

  updateLog() {
    this.dataService.currentLogDatetime = this.datetime;

    this.dataService.printLogEntry();
  }

  updateUIFromLog() {
    this.datetime = this.dataService.currentLogDatetime;
  }

  ngOnInit() {
  }

}
