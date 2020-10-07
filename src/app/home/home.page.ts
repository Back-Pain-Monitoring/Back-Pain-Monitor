import { Component, ErrorHandler } from '@angular/core';
import { LogDataService } from '../services/log-data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private logDataSvc: LogDataService) {

  }

  addLog(): void {
    // this.logDataSvc.createLog(data);
  }

}
