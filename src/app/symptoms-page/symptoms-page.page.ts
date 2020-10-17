import { Component, OnInit } from '@angular/core';

import { LogDataService } from '../services/log-data.service';

@Component({
  selector: 'app-symptoms-page',
  templateUrl: './symptoms-page.page.html',
  styleUrls: ['./symptoms-page.page.scss'],
})
export class SymptomsPagePage implements OnInit {

  intensity: number;
  painType: string;
  duration: number;
  cause: string;
  is_constant: "true" | "false";  // TODO: there's got to be a better way to do this than this awkward string/boolean conversion
  mobility: string[];

  constructor(public dataService: LogDataService) {
  }

  ngOnInit() {
  }

  // TODO: trigger this function when the page is navigated away from
  updateLog() {
    // TODO: grab component
    // TODO: connect to UI element
    this.dataService.currentLogIntensity = this.intensity;
    this.dataService.currentLogType = this.painType;
    this.dataService.currentLogDuration = this.duration;
    this.dataService.currentLogMobility = this.mobility;
    this.dataService.currentLogCause = this.cause;
    this.dataService.currentLogIs_constant = this.is_constant === "true";
    this.dataService.printLogEntry();
  }

  updateUIFromLog() {
    this.intensity = this.dataService.currentLogIntensity;
    this.painType = this.dataService.currentLogType;
    this.duration = this.dataService.currentLogDuration;
    this.mobility = this.dataService.currentLogMobility;
    this.cause = this.dataService.currentLogCause;
    this.is_constant = this.dataService.currentLogIs_constant ? "true" : "false";
  }

  // look at the UI to see the changes were made appropriately. Can trigger this function by attaching it to a button.
  testDataBinding() {
    this.intensity = 10;
    this.painType = "numbness";
    this.duration = 44;
    this.cause = "backpack";
    this.mobility = ["moving", "resting"];
    this.is_constant = "true";
  }

}
