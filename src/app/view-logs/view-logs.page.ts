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
export class ViewLogsPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  private initialLogCount = 10;
  private moreCount = 5;
  private logCount = this.initialLogCount;  // we are using logCount and not just logsToDisplay.length because logsToDisplay.length may be lower due to filtering
  private logsToDisplay = [];
  private filter: LogFilter;

  constructor(public dataService: LogDataService, private navCtrl: NavController, public modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.logsToDisplay = this.dataService.getLogs();
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

  // this method creates a modal which is a dialog that appears on top of app's content this will be used as a way of setting filter and passing data
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: FilterModalPageComponent,
      backdropDismiss: false,
      componentProps: {
        Filter : this.filter
      }
    });
    await modal.present();

    modal.onWillDismiss().then(dataReturned => {
      if ( dataReturned !== null ) {
        this.filter = dataReturned.data;
        this.filterLogs();
        console.log("filter returned is: ", this.filter);

      }
    })
  }

  filterLogs() {
    // TODO: might change this later so we don't call the data service every time. What approach is better depends on how many records we have.
    this.logsToDisplay = this.dataService.getLogsWithFilter(this.filter);
  }

  editLog(log: LogEntry) {
    this.dataService.startEditLog(log);
    this.navCtrl.navigateRoot('/datetime');
  }

  deleteLog(log: LogEntry) {
    this.dataService.deleteLog(log);
    this.logsToDisplay = this.dataService.getLogs();  // TODO: change this to use the filter once we have filter working
  }

}
