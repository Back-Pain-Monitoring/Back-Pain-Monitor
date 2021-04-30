import { Component, OnInit, ViewChild } from '@angular/core';
import { LogDataService, LogEntry } from '../services/log-data.service';
import { LogFilter } from '../services/log-data.service';
import { IonInfiniteScroll, ModalController, NavController } from '@ionic/angular';
import { FilterModalPageComponent } from '../filter-modal/filter-modal.component';

@Component({
  selector: 'app-view-logs',
  templateUrl: './view-logs.page.html',
  styleUrls: ['./view-logs.page.scss'],
})
export class ViewLogsPage {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  private initialLogCount = 10;
  private moreCount = 5;
  private logCount = this.initialLogCount;  // we are using logCount and not just logsToDisplay.length because logsToDisplay.length may be lower due to filtering
  public logsToDisplay = [];
  private filter: LogFilter;

  constructor(public dataService: LogDataService, private navCtrl: NavController, public modalCtrl: ModalController) {
    this.filter = this.dataService.createEmptyFilter();
    dataService.logSubj.subscribe(logs => {
      if (this.filter === this.dataService.createEmptyFilter()) {
        console.log("filtering");
        this.filterLogs();
      } else {
        console.log("displaying");
        this.logsToDisplay.length = 0;
        logs.forEach(log => this.logsToDisplay.push(log));
        console.log(this.logsToDisplay);
      }
    });
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

  // this method creates a modal which is a dialog that appears on top of app's content this will be used as a way of setting filter and passing data
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: FilterModalPageComponent,
      backdropDismiss: false,
      componentProps: {
        Filter: this.filter
      }
    });
    await modal.present();

    modal.onWillDismiss().then(dataReturned => {
      if (dataReturned !== null) {
        this.filter = dataReturned.data;
        this.filterLogs();
      }
    })
  }

  filterLogs() {
    this.logsToDisplay = this.dataService.getLogsWithFilter(this.filter);
  }

  editLog(log: LogEntry) {
    this.dataService.startEditLog(log);
    this.navCtrl.navigateRoot('/tabs/datetime');
  }

  deleteLog(log: LogEntry) {
    this.dataService.deleteLog(log);
  }

}
