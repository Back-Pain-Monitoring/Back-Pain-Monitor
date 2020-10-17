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
      
    };
  

  ngOnInit() {
  }
  
  updateLog() {
    this.dataService.currentLogRedflag_symptoms = this.redflags_symptoms;
  }

  updateUIFromLog() {
    
  }
}
