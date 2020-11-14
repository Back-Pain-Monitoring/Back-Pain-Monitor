import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { MedicationDataService } from '../services/medication-data.service';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.page.html',
  styleUrls: ['./medication.page.scss'],
})
export class MedicationPage implements OnInit {

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

  intensityTitle: string = this.intensityInfo[0][0];
  intensityDescription: string = this.intensityInfo[0][1];
  datetime: Date;
  med_type: string[];
  med_comment: string;
  intensity: number;
  id: number;

  constructor(private alertCtrl: AlertController, private navCtrl: NavController, public dataService: MedicationDataService) {

  }

  ngOnInit() {
    this.updateUIFromMed;
  }

  private onIntensityChange(newIntensity) {
    if (!(newIntensity in this.intensityInfo)) {
      newIntensity = 0;
    }
    this.intensity = newIntensity;
    this.intensityTitle = this.intensityInfo[newIntensity][0];
    this.intensityDescription = this.intensityInfo[newIntensity][1];
  }

  // Goes back to home page -- Thanks to Leo
  backToHome() {
    this.updateMeds();
    this.dataService.submitMedEntry();
    this.navCtrl.navigateRoot('/tabs/home')
  }

  // Submit Medication Use
  submitMedication(): void {
    this.alertCtrl.create({
      message: "Your Medication Has Been Logged!",
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.backToHome();
          }
        }
      ]
    }).then((prompt) => {
      prompt.present();
    });
  }

  updateMeds() {
    console.log("Updating UI from dataservice");
    this.dataService.currentMedDateTime = this.datetime;
    this.dataService.currentMedMed_type = this.med_type;
    this.dataService.currentMedIntensity = this.intensity;
    this.dataService.currentMedComment = this.med_comment;
    this.dataService.printMedEntry();
  }

  updateUIFromMed() {
    this.dataService.printMedEntry();
    this.datetime = this.dataService.currentMedDateTime;
    this.med_type = this.dataService.currentMedMed_type;
    this.intensity = this.dataService.currentMedIntensity;
    this.med_comment = this.dataService.currentMedComment;
  }

}
