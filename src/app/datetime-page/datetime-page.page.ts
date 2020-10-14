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
    this.dataService.logSubject.subscribe(data => { // TODO: add type
      console.log("datetime recieved updated log: " + data);
    });
  }

  // TODO: trigger this function when the page is navigated away from
  updateLog() {
    // TODO: grab component
    // TODO: connect to UI element
    this.dataService.currentLogDatetime = this.datetime;
    this.dataService.updateCurrentLog();
    console.log("datetime: " + this.dataService.currentLogDatetime);
    console.log("intensity: " + this.dataService.currentLogIntensity);
    // this.dataService.currentLogDatetime = new Date();
    // console.log("datetime below");
    // console.log(this.dataService.currentLogDatetime);
  }

  ngOnInit() {
  }

}
