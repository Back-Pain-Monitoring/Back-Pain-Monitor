import { Component, OnInit } from '@angular/core';
import { EmailComposer, EmailComposerOptions } from '@ionic-native/email-composer';
import { IonDatetime } from '@ionic/angular';
import { DatetimeAuthguardService } from '../services/datetime-authguard.service';

@Component({
  selector: 'app-send-logs-page',
  templateUrl: './send-logs-page.page.html',
  styleUrls: ['./send-logs-page.page.scss'],
})
export class SendLogsPagePage implements OnInit {

  startDate: string;
  endDate: string;

  constructor(private emailComposer: EmailComposer) { }

  ngOnInit() {
  }

  // sendEmail() {
  //    let email = {
  //      to:
  //        cc:
  //      attachments: [

  //      ]
  //    }
  // }

}
