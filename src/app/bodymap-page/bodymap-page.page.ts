import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LogDataService } from '../services/log-data.service';
import imageMapResize from 'image-map-resizer';

@Component({
  selector: 'app-bodymap-page',
  templateUrl: './bodymap-page.page.html',
  styleUrls: ['./bodymap-page.page.scss'],
})
export class BodymapPagePage implements OnInit {

  public body_parts: string[] = [];

  constructor(public dataService: LogDataService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.updateUIFromLog();
  }

  updateLog() {
    this.dataService.currentLogBodyParts = this.body_parts;
    this.dataService.updateIsEntered(true);
  }

  updateUIFromLog() {
    this.dataService.updateIsEntered(false);
    this.body_parts = this.dataService.currentLogBodyParts;
  }

  selectPart(part: string) {
    if (this.body_parts.includes(part)) {
      console.log(part, "deselected");
      this.body_parts.splice(this.body_parts.indexOf(part), 1);
    } else {
      console.log(part, "selected");
      this.body_parts.push(part);
    }
    this.cd.markForCheck();
  }

  ionViewDidEnter() {
    console.log("resizing imageMap");
    imageMapResize();
  }

}
