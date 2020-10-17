import { Component, OnInit } from '@angular/core';

import { LogDataService } from '../services/log-data.service';

@Component({
  selector: 'app-redflags-page',
  templateUrl: './redflags-page.page.html',
  styleUrls: ['./redflags-page.page.scss'],
})

export class RedflagsPagePage implements OnInit {

  redflags_symptoms: string[];

  constructor(public dataService: LogDataService) { 
      this.dataService.logSubject.subscribe(data => { // TODO: add type
      console.log("symptoms recieved updated log: " + data);
    });
  }

  ngOnInit() {
  }
  
  updateLog() {
    this.dataService.currentLogRedflag_symptoms = this.redflags_symptoms;
  }

  updateUIFromLog() {
    
  }
}
