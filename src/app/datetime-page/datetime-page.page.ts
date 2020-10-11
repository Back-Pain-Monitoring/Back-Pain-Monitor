import { Component, OnInit } from '@angular/core';

import { LogDataService } from '../services/log-data.service';

@Component({
  selector: 'app-datetime-page',
  templateUrl: './datetime-page.page.html',
  styleUrls: ['./datetime-page.page.scss'],
})
export class DatetimePagePage implements OnInit {

  constructor(public dataService: LogDataService) {
  }

  // TODO: trigger this function when the page is navigated away from
  updateLog() {
    // TODO: grab component
    // TODO: connect to UI element
    this.dataService.setCurrentLogDatetime(new Date());
    console.log(this.dataService.getCurrentLogDatetime());
    // this.dataService.currentLogDatetime = new Date();
    // console.log("datetime below");
    // console.log(this.dataService.currentLogDatetime);
  }

  ngOnInit() {
  }

}
