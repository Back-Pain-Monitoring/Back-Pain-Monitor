import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { LogDataService } from 'src/app/services/log-data.service';

@Component({
  selector: 'app-log-nav-button',
  templateUrl: './log-nav-button.component.html',
  styleUrls: ['./log-nav-button.component.scss'],
})
export class LogNavButtonComponent implements OnInit {

  @Input() direction: "forward" | "backward";
  @Input() link: string;
  private subscription: Subscription;

  constructor(private navCtrl: NavController, private dataService: LogDataService) { }

  ngOnInit() {

  }

  navigate() {

    console.log('navigating');

    // if (this.subscription) {
    //   console.log('unsubscribing');
    //   this.subscription.unsubscribe();
    //   this.subscription = null;
    // }

    this.subscription = this.dataService.isEnteredSubj.subscribe((is_entered) => {
      if (is_entered) {
        console.log('activating navCtrl');
        if (this.direction === "forward") {
          this.navCtrl.navigateForward(this.link);
        } else {
          this.navCtrl.navigateBack(this.link);
        }
        this.subscription.unsubscribe();
      }
    })

  }

}
