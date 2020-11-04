import { Component, OnInit } from '@angular/core';

import { LogDataService } from '../services/log-data.service';

@Component({
  selector: 'app-redflags-page',
  templateUrl: './redflags-page.page.html',
  styleUrls: ['./redflags-page.page.scss'],
})

export class RedflagsPagePage implements OnInit {

  public form: Array<{ val: string, isChecked: boolean }> = [];

  redflags_symptoms: string[] = [];

  constructor(public dataService: LogDataService) {
  }

  ngOnInit() {
    this.dataService.redflags.forEach(redflag => {
      this.form.push({ val: redflag, isChecked: false })
    })
    this.updateUIFromLog();
  }

  // Converting boolean inputs as string and storing them
  convertBoolToString() {
    this.redflags_symptoms = [];
    for (let i = 0; i < 4; i++) {
      if (this.form[i].isChecked == true) {
        this.redflags_symptoms.push("True");
      } else {
        this.redflags_symptoms.push("False");
      }
    }
  }

  // Converting string data as boolean and display on page
  convertStringToBool() {
    console.log("covncsrioi sdss");
    for (let i = 0; i < 4; i++) {
      if (this.redflags_symptoms[i] == "True") {
        this.form[i].isChecked = true
      } else if (this.redflags_symptoms[i] == "False") {
        this.form[i].isChecked = false
      }
    }
  }

  updateLog() {
    console.log("updating log");
    this.convertBoolToString();
    this.dataService.currentLogRedflag_symptoms = this.redflags_symptoms;
  }

  updateUIFromLog() {
    console.log("updating UI from dataservice");
    this.redflags_symptoms = this.dataService.currentLogRedflag_symptoms;
    this.convertStringToBool();
  }
}
