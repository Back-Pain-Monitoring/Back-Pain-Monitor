import { Component, OnInit } from '@angular/core';

import { LogDataService } from '../services/log-data.service';

@Component({
  selector: 'app-redflags-page',
  templateUrl: './redflags-page.page.html',
  styleUrls: ['./redflags-page.page.scss'],
})

export class RedflagsPagePage implements OnInit {

  numbness: boolean;

  public form = [
    { val: 'numbness' , isChecked: false },
    { val: 'inability', isChecked: false },
    { val: 'losWeight' , isChecked: false },
    { val: 'losBladder', isChecked: false }
  ]

  redflags_symptoms: string[];

  constructor(public dataService: LogDataService) {
  }

  ngOnInit() {
  }
  
  convertBoolToString() {
    if ( this.form[0].isChecked == true ) {
      this.redflags_symptoms.push("NumbnessTrue");
    } else {
      this.redflags_symptoms.push("NumbnessFalse");
    }

    if ( this.form[1].isChecked == true ) {
      this.redflags_symptoms.push("InabilityTrue");
    } else {
      this.redflags_symptoms.push("InabilityFalse");
    }
    
    if ( this.form[2].isChecked == true ) {
      this.redflags_symptoms.push("LosingWeightTrue");
    } else {
      this.redflags_symptoms.push("LosingWeightFalse");
    }
    
    if ( this.form[3].isChecked == true ) {
      this.redflags_symptoms.push("LosingBladderTrue");
    } else {
      this.redflags_symptoms.push("LosingBladderFalse");
    }
  }

  updateLog() {
    this.dataService.currentLogRedflag_symptoms = this.redflags_symptoms;
    this.dataService.printLogEntry();
  }

  updateUIFromLog() {
    this.redflags_symptoms = this.dataService.currentLogRedflag_symptoms;
  }
}
