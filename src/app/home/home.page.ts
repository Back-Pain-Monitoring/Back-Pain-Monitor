import { Component, ErrorHandler } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LogDataService } from '../services/log-data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private userName: string;
  public welcomeMsg: string;

  constructor(private authSvc: AuthService) {
    this.authSvc.uidSubj.subscribe(value => {
      this.userName = this.authSvc.getUserName();
      if (this.userName) {
        this.welcomeMsg = this.userName + "!";
      } else {
        this.welcomeMsg = "please login or sign up.";
      }
    });
  }

  addLog(): void {
    // this.logDataSvc.createLog(data);
  }

}
