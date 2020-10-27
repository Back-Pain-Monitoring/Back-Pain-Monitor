import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.page.html',
  styleUrls: ['./filter-modal.page.scss'],
})
export class FilterModalPage {
  intensityInput = new FormControl('', Validators,required);
  intensity: any = { lower: 0, upper:10};
  
  // intensityTitle: string = this.intensityInfo[0][0];
  // intensityDescription: string = this.intensityInfo[0][1];

  constructor( private modalCtrl: ModalController ) { }

  // method of dismissing modal
  dismissModal() {
    this.modalCtrl.dismiss();  
  }

  private onIntensityChange(newIntensity) {
    this.intensity.lower = newIntensity.lower;
    this.intensity.upper = newIntensity.upper;
  }

  save() { 
  }
}
