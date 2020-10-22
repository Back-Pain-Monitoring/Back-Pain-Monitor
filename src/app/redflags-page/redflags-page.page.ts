import { Component, OnInit } from '@angular/core';

import { LogDataService } from '../services/log-data.service';

@Component({
  selector: 'app-redflags-page',
  templateUrl: './redflags-page.page.html',
  styleUrls: ['./redflags-page.page.scss'],
})

export class RedflagsPagePage implements OnInit {

  public form = [
    { val: 'numbness' , isChecked: false },
    { val: 'inability', isChecked: false },
    { val: 'losWeight' , isChecked: false },
    { val: 'losBladder', isChecked: false }
  ]

  redflags_symptoms: string[] = [];

  constructor(public dataService: LogDataService) {
  }

  ngOnInit() {
  }
  
  // Converting boolean inputs as string and storing them
  convertBoolToString() {
    for (let i = 0; i < 4; i++) {
      if ( this.form[i].isChecked == true ) {
        this.redflags_symptoms.push("True");
      } else {
        this.redflags_symptoms.push("False");
      }
    }
  }

  // Converting string data as boolean and display on page
  convertStringToBool() {
    for (let i = 0; i < 4; i++) {
      if ( this.redflags_symptoms[0] == "True" ) {
        this.form[i].isChecked == true
      } else if ( this.redflags_symptoms[0] == "False" ) {
        this.form[i].isChecked == false }
    }
  }

  updateLog() {
    this.convertBoolToString();
    this.dataService.currentLogRedflag_symptoms = this.redflags_symptoms;
    this.dataService.printLogEntry();
  }

  updateUIFromLog() {
    this.convertStringToBool();
    this.redflags_symptoms = this.dataService.currentLogRedflag_symptoms;
  }
}
