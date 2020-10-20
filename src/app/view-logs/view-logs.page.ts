import { Component, OnInit, ViewChild } from '@angular/core';
import { LogDataService } from '../services/log-data.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-view-logs',
  templateUrl: './view-logs.page.html',
  styleUrls: ['./view-logs.page.scss'],
})
export class ViewLogsPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(public dataService: LogDataService) {
  }

  ngOnInit() {
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (1000 == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

}
