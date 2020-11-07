import { Component, Input, OnInit} from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular'
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

  constructor( private modalCtrl: ModalController, public dataService: LogDataService, private alertCtrl: AlertController ) {
  }

  ngOnInit() {
    this.updateFilterUI();
    console.log('Filter rece', this.Filter);
  }

  // Updates UI based on previous filter setting
  updateFilterUI() {
    if ( this.Filter.datetime_min != undefined ) {
      this.datetime_min = this.Filter.datetime_min.toISOString();
    } else {
      this.datetime_min = new Date("2017-01-05").toISOString();
    }

    if ( this.Filter.datetime_max != undefined ) {
      this.datetime_max = this.Filter.datetime_max.toISOString();
    } else {
      this.datetime_max = new Date().toISOString();
    }

    if ( this.Filter.intensity_min != undefined ) {
      this.intensity.lower = this.Filter.intensity_min;  
    }
    
    if ( this.Filter.intensity_max != undefined ) {
      this.intensity.upper = this.Filter.intensity_max;  
    }

    this.type = this.Filter.type;
    this.body_part = this.Filter.body_part;
    this.duration_min = this.Filter.duration_min;
    this.duration_max = this.Filter.duration_max;
  }
  
  private onIntensityChange(newIntensity) {
    this.intensity.lower = newIntensity.lower;
    this.intensity.upper = newIntensity.upper;
  }

  // method of dismissing modal
  dismissModal() {
    this.modalCtrl.dismiss(this.Filter, 'cancel');  
  }

  // Resets current filter setting
  resetFilter() {
    this.datetime_min = new Date("2017-01-05").toISOString();
    this.datetime_max = new Date().toISOString();
    this.intensity =  { lower: 0, upper:10};
    this.type = undefined;
    this.body_part = undefined;
    this.duration_min = undefined;
    this.duration_max = undefined;
  }

  // Checking min date is before max date
  checkDate() {
    let minDate: Date = new Date(this.datetime_min);
    let maxDate: Date = new Date(this.datetime_max);

    if ( minDate < maxDate ) {
      return 1;
    } else {
      return 2;
    }
  }

  // Checking the max duration is bigger than min duration
  checkDuration() {
    if ( this.duration_min < this.duration_max ) {
      return 1;
    } else {
      return 2;
    }
  }

  // function to save filter settings and passing to view-log page
  save() {
    if ( this.checkDate() == 1 && this.checkDuration() == 1) {
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
    } else if ( this.checkDate() == 2 ) {
      this.alertCtrl.create({header: "Warning!", message: "'From' date should be before 'To' date!", buttons:['Close']}).then((prompt) => {
        prompt.present();
      });
    } else if ( this.checkDuration() == 2 )  { 
      this.alertCtrl.create({header: "Warning!", message: "'From' time should be smaller than 'Up to' time!", buttons:['Close']}).then((prompt) => {
        prompt.present();
      });
    }
  }
}
