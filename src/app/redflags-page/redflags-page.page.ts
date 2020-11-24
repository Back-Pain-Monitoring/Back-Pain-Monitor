import { Component, OnInit } from '@angular/core';

import { LogDataService } from '../services/log-data.service';

@Component({
  selector: 'app-redflags-page',
  templateUrl: './redflags-page.page.html',
  styleUrls: ['./redflags-page.page.scss'],
})

export class RedflagsPagePage implements OnInit {

  public form: {} = {};

  constructor(public dataService: LogDataService) {
  }

  ngOnInit() {
    this.updateUIFromLog();
  }

  updateLog() {
    const symptoms = [];
    for (const flag in this.form) {
      if (this.form[flag]) {
        symptoms.push(flag);
      }
    }
    this.dataService.currentLogRedflag_symptoms = symptoms;
    this.dataService.updateIsEntered(true);
  }

  updateUIFromLog() {
    this.dataService.updateIsEntered(false);
    this.dataService.redflags.forEach(flag => {
      this.form[flag] = false;
    });
    this.dataService.currentLogRedflag_symptoms.forEach(flag => {
      this.form[flag] = true;
    });
  }

}
