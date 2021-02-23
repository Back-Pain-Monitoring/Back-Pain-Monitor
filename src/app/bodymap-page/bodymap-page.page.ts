import { Component, OnInit } from '@angular/core';
import { LogDataService } from '../services/log-data.service';
import imageMapResize from 'image-map-resizer';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-bodymap-page',
  templateUrl: './bodymap-page.page.html',
  styleUrls: ['./bodymap-page.page.scss'],
})
export class BodymapPagePage implements OnInit {

  public body_part: string;
  public isLandscape: boolean;

  constructor(public dataService: LogDataService, private platform: Platform) {
    platform.ready().then(() => {
      this.isLandscape = platform.isLandscape();
    });
    platform.resize.subscribe(() => {
      console.log("resized");
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
      this.isLandscape = platform.isLandscape();
    });
  }

  ngOnInit() {
    this.updateUIFromLog();
  }

  updateLog() {
    this.dataService.currentLogBody_part = this.body_part;
    this.dataService.updateIsEntered(true);
  }

  updateUIFromLog() {
    this.dataService.updateIsEntered(false);
    if (this.dataService.currentLogBody_part != undefined) {
      this.body_part = this.dataService.currentLogBody_part;
    }
  }

  selectPart(part: string) {
    console.log(part, "selected");
    this.body_part = part;
  }

  ionViewDidEnter() {
    console.log("resizing imageMap");
    imageMapResize();
  }

}
