import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LogDataService } from 'src/app/services/log-data.service';

@Component({
  selector: 'app-log-nav-button',
  templateUrl: './log-nav-button.component.html',
  styleUrls: ['./log-nav-button.component.scss'],
})
export class LogNavButtonComponent implements OnInit {

  @Input() direction: "forward" | "backward";
  @Input() link: string;

  private navRequested: boolean = false;

  constructor(private navCtrl: NavController, private dataService: LogDataService) { }

  ngOnInit() {
    this.dataService.isEnteredSubj.subscribe((data) => {
      if (data === true) {
        this.navigate();
      }
    });
  }

  requestNav() {
    this.navRequested = true;
    console.log(`requesting nav for ${this.direction}`);
  }

  navigate() {
    if (!this.navRequested) {
      console.log(`nav not requested for ${this.direction}`);
      return;
    }
    console.log('activating navCtrl');
    if (this.direction === "forward") {
      this.navCtrl.navigateForward(this.link);
    } else {
      this.navCtrl.navigateBack(this.link);
    }
    this.navRequested = false;
  }


}
