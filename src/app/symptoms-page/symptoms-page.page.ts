import { Component, OnInit } from '@angular/core';

import { LogDataService } from '../services/log-data.service';

@Component({
  selector: 'app-symptoms-page',
  templateUrl: './symptoms-page.page.html',
  styleUrls: ['./symptoms-page.page.scss'],
})
export class SymptomsPagePage implements OnInit {

  constructor(public dataService: LogDataService) {
    this.dataService.logSubject.subscribe(data => { // TODO: add type
      console.log("symptoms recieved updated log: " + data);
    });
  }

  ngOnInit() {
  }

  helloWorld() {
    console.log("hello world");
  }

  // TODO: trigger this function when the page is navigated away from
  updateLog() {
    // TODO: grab component
    // TODO: connect to UI element
    this.dataService.currentLogIntensity = 1;
    this.dataService.updateCurrentLog();
    console.log("datetime: " + this.dataService.currentLogDatetime);
    console.log("intensity: " + this.dataService.currentLogIntensity);
  }

}
