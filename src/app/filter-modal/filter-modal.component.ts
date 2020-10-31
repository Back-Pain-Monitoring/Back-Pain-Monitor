import { Component, Input, OnInit } from '@angular/core';
import { IonDatetime, ModalController } from '@ionic/angular'
import { FormControl, Validators } from '@angular/forms'
import { DatetimePagePage } from '../datetime-page/datetime-page.page';
import { LogDataService, LogFilter } from '../services/log-data.service';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalPageComponent implements OnInit{
  private filter: LogFilter;
  // @Input() intensity: any = {};
  @Input("rFilter") rFilter;
  intensity_input: any = { lower: 0, upper:10};
  datetime_min_input: any;
  datetime_max_input: any;
  type_input: String = "";
  body_part_input: String = "";
  duration_min_input: Number;
  duration_max_input: Number = 0;
  
  // @Input() datetime_min: any = this.datetime_min_input;
  // @Input() datetime_max: any = this.datetime_max_input;
  // @Input() intensity: any = this.intensity_input;
  // @Input() type: any = this.type_input;
  // @Input() body_part: any = this.body_part_input;
  // @Input() duration_min: any = this.duration_min_input;
  // @Input() duration_max: any = this.duration_max_input ;

  constructor( private modalCtrl: ModalController, public dataService: LogDataService ) { }

  // method of dismissing modal
  dismissModal() {
    this.modalCtrl.dismiss(null, 'cancel');  
  }

  private onIntensityChange(newIntensity) {
    this.intensity_input.lower = newIntensity.lower;
    this.intensity_input.upper = newIntensity.upper;
  }

  save() {
    this.filter = this.dataService.createEmptyFilter();
    // this.filter.datetime_min = new Date("2020-01-05");
    // this.filter.datetime_max = new Date("2020-02-01");
    this.filter.datetime_min = this.datetime_min_input;
    this.filter.datetime_max = this.datetime_max_input;
    this.filter.intensity_min = 3;
    this.filter.intensity_max = 7;
    // this.filter.body_part = "upper back";
    // this.filter.type = "Shooting";
    this.filter.duration_min = 20;
    this.filter.duration_max = 40;
    const newintensity = this.intensity_input;
    // console.log(this.datetime_min);
    // console.log(this.datetime_max_input);
    // console.log(this.intensity);
    console.log(this.rFilter);
    this.modalCtrl.dismiss(this.filter, "submitted");
  //   console.log(this.body_part);
  //   console.log(this.duration_min);
  //   console.log(this.duration_max);
  }
}
