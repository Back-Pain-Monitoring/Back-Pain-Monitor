import { Component, OnInit, ViewChild } from '@angular/core';
import { LogDataService, LogEntry } from '../services/log-data.service';
import { LogFilter } from '../services/log-data.service';
import { IonInfiniteScroll, NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-logs',
  templateUrl: './view-logs.page.html',
  styleUrls: ['./view-logs.page.scss'],
})
export class ViewLogsPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  private initialLogCount = 10;
  private moreCount = 5;
  private logCount = this.initialLogCount;  // we are using logCount and not just logsToDisplay.length because logsToDisplay.length may be lower due to filtering
  private logsToDisplay = [];
  private filter: LogFilter;

  constructor(public dataService: LogDataService, private navCtrl: NavController) {
  }

  ngOnInit() {
    this.logsToDisplay = this.dataService.getLogs().slice().reverse();
    this.filter = this.dataService.createEmptyFilter();
  }

  // this method is currently unused, but when we get to stuff with the database we may want something like this
  loadData(event) {
    const logs = this.dataService.getNextLogs(this.moreCount, this.logCount);
    if (logs === []) {
      event.target.disabled = true;
    } else {
      this.logsToDisplay = this.logsToDisplay.concat(logs);
      this.logCount += logs.length;
    }
    event.target.complete();
  }

  filterLogs() {
    // the commented out code was used for testing
    // this.filter = this.dataService.createEmptyFilter();
    // this.filter.datetime_min = new Date("2020-01-05");
    // this.filter.datetime_max = new Date("2020-02-01");
    // this.filter.intensity_min = 3;
    // this.filter.intensity_max = 7;
    // this.filter.body_part = "upper back";
    // this.filter.type = "Shooting";
    // this.filter.duration_min = 20;
    // this.filter.duration_max = 40;

    // TODO: might change this later so we don't call the data service every time. What approach is better depends on how many records we have.
    this.logsToDisplay = this.dataService.getLogsWithFilter(this.filter);
  }

  editLog(log: LogEntry) {
    console.log(`editing log`);
    console.log(log);
    this.dataService.startEditLog(log);
    this.navCtrl.navigateRoot('/datetime');
  }

}
