import { Component, Input, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular'
import { LogDataService, LogFilter } from '../services/log-data.service';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalPageComponent implements OnInit{
private filter: LogFilter;
  @Input() Filter: LogFilter;
  intensity: any = { lower: 0, upper:10};
  datetime_min: string;
  datetime_max: string;
  type: String;
  body_part: String;
  duration_min: Number;
  duration_max: Number;

  constructor( private modalCtrl: ModalController, public dataService: LogDataService ) {
  }

  ngOnInit() {
    this.updateFilterUI();
    console.log('Filter rece', this.Filter);
  }

  // Updates UI based on previous filter setting
  updateFilterUI() {
    this.datetime_max = this.Filter.datetime_max.toISOString();
    this.datetime_min = this.Filter.datetime_min.toISOString();
    this.type = this.Filter.type;
    this.body_part = this.Filter.body_part;
    this.duration_min = this.Filter.duration_min;
    this.duration_max = this.Filter.duration_max;
  }

  // method of dismissing modal
  dismissModal() {
    this.modalCtrl.dismiss(this.Filter, 'cancel');  
  }

  private onIntensityChange(newIntensity) {
    this.intensity.lower = newIntensity.lower;
    this.intensity.upper = newIntensity.upper;
  }

  save() {
    // this.Filter.datetime_min = new Date("2020-01-05");
    // this.Filter.datetime_max = new Date("2020-02-01");
    this.Filter.datetime_min = new Date(this.datetime_min);
    this.Filter.datetime_max = new Date(this.datetime_max);
    this.Filter.intensity_min = this.intensity.lower;
    this.Filter.intensity_max = this.intensity.upper;
    this.Filter.body_part = this.body_part;
    this.Filter.type = this.type;
    this.Filter.duration_min = this.duration_min;
    this.Filter.duration_max = this.duration_max;
    const newintensity = this.intensity;
    console.log("this.rFilter:", this.Filter);
    this.modalCtrl.dismiss(this.Filter, "submitted");
  }
}
