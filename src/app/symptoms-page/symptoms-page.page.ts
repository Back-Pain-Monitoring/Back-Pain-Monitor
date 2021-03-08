import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { LogDataService } from '../services/log-data.service';

@Component({
  selector: 'app-symptoms-page',
  templateUrl: './symptoms-page.page.html',
  styleUrls: ['./symptoms-page.page.scss'],
})
export class SymptomsPagePage implements OnInit {

  // pain scale from https://www.reddit.com/r/ChronicPain/comments/5ouyu4/pain_scale_for_people_in_chronic_pain/
  private intensityInfo = {
    0: ["No pain", "I have no pain."],
    1: ["Minimal", "My pain is hardly noticable."],
    2: ["Mild", "I have a low level of pain. I am aware of my pain only when I pay attention to it."],
    3: ["Uncomfortable", "My pain bothers me but I can ignore it most of the time"],
    4: ["Moderate", "I am constantly aware of my pain but I can continue most activities"],
    5: ["Distracting", "I think about my pain most of the time. I cannot do some of the activities I need to do each day because of the pain."],
    6: ["Distressing", "I think about my pain all of the time. I give up many activities because of my pain."],
    7: ["Unmanagable", "I am in pain most of the time. It keeps me from doing most activities."],
    8: ["Intense", "My pain is so severe that it is hard to think of anything else. Talking and listening are difficult."],
    9: ["Severe", "My pain is all that I can think about. I can barely talk or move because of the pain."],
    10: ["Unable to move", "I am in bed and can't move due to my pain. I need someone to take me to the emergency room to get help for my pain."],
  }

  intensity: number;
  painType: string;
  painBefore: boolean = false;
  timesBefore: number;
  nightPain: boolean = false;
  worse: Array<string> = [];
  better: Array<string> = [];
  cause: string;
  is_constant: "true" | "false";  // TODO: there's got to be a better way to do this than this awkward string/boolean conversion
  mobility: string[];
  intensityTitle: string = this.intensityInfo[0][0];
  intensityDescription: string = this.intensityInfo[0][1];

  constructor(public dataService: LogDataService) {
  }

  ngOnInit() {
    this.updateUIFromLog();
  }

  public onIntensityChange(newIntensity) {
    if (!(newIntensity in this.intensityInfo)) {
      newIntensity = 0;
    }
    this.intensity = newIntensity;
    this.intensityTitle = this.intensityInfo[newIntensity][0];
    this.intensityDescription = this.intensityInfo[newIntensity][1];
  }

  updateLog() {
    this.dataService.currentLogIntensity = this.intensity;
    this.dataService.currentLogType = this.painType;
    this.dataService.currentLogTimesBefore = this.painBefore ? this.timesBefore : 0;
    this.dataService.currentLogNightPain = this.nightPain;
    this.dataService.currentLogWorse = this.worse;
    this.dataService.currentLogBetter = this.better;
    this.dataService.currentLogMobility = this.mobility;
    this.dataService.currentLogCause = this.cause;
    this.dataService.currentLogIs_constant = this.is_constant === "true";
    this.dataService.updateIsEntered(true);
  }

  updateUIFromLog() {
    this.dataService.updateIsEntered(false);
    if (this.dataService.currentLogIntensity !== undefined) {
      this.onIntensityChange(this.dataService.currentLogIntensity);
    } else {
      this.onIntensityChange(0);
    }
    this.painType = this.dataService.currentLogType;
    this.painBefore = this.dataService.currentLogTimesBefore > 0;
    this.timesBefore = this.dataService.currentLogTimesBefore;
    this.nightPain = this.dataService.currentLogNightPain;
    this.worse = this.dataService.currentLogWorse;
    this.better = this.dataService.currentLogBetter;
    this.mobility = this.dataService.currentLogMobility;
    this.cause = this.dataService.currentLogCause;
    this.is_constant = this.dataService.currentLogIs_constant === false ? "false" : "true";
  }

}
