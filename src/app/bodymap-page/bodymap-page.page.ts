import { Component, OnInit } from '@angular/core';
import { LogDataService } from '../services/log-data.service';

@Component({
  selector: 'app-bodymap-page',
  templateUrl: './bodymap-page.page.html',
  styleUrls: ['./bodymap-page.page.scss'],
})
export class BodymapPagePage implements OnInit {

  constructor(private dataService: LogDataService) { }

  ngOnInit() {
  }

  updateLog() {
    this.dataService.updateIsEntered(true);
  }

}
