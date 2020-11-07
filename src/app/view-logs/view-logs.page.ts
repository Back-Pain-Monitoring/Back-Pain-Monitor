import { Component, OnInit, ViewChild } from '@angular/core';
import { LogDataService } from '../services/log-data.service';
import { LogFilter } from '../services/log-data.service';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
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

  constructor(public dataService: LogDataService, public modalCtrl: ModalController) {
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

  test() {
    
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

}
