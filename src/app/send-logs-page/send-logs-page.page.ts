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

  constructor(private emailComp: EmailComposer) { }

  ngOnInit() {
  }

  async sendEmail() {
    this.emailComp.addAlias('gmail', 'com.google.android.gm')
    const email: EmailComposerOptions = {
      app: 'gmail',
      subject: "Back Pain Report",
      isHtml: false,
    };
    await this.emailComp.open(email);
  }

}
