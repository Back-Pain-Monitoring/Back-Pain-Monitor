import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalPageComponent {
  @Input() datetime_min: any = this.datetime_min;
  @Input() datetime_max: any = this.datetime_min;
  @Input() intensity_min = 3;
  @Input() intensity_max = 7;
  @Input() body_part = "upper back";
  @Input() type = "Shooting";
  @Input() duration_min = ;
  @Input() duration_max = ;
  startdatetimeInput = new FormControl('', Validators.required);
  enddatetimeInput = new FormControl('', Validators.required);
  intensityInput = new FormControl('', Validators.required);
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
    console.log(this.startdatetimeInput);
    console.log(this.enddatetimeInput);
    console.log(this.intensityInput);
  }
}
