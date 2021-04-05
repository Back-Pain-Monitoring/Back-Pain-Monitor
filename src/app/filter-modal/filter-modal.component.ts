import { Component, Input, OnDestroy, OnInit, HostListener } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular'
import { LogDataService, LogFilter } from '../services/log-data.service';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})

export class FilterModalPageComponent implements OnInit, OnDestroy {
  private filter: LogFilter;
  @Input() Filter: LogFilter;
  intensity: any = { lower: 0, upper: 10 };
  datetime_min: string;
  datetime_max: string;
  type: String;
  body_part: string;
  timesBefore_lower: Number;
  timesBefore_upper: Number;

  constructor( private modalCtrl: ModalController, public dataService: LogDataService, private alertCtrl: AlertController ) {
  }

  ngOnInit() {
    this.updateFilterUI();
    const modalState = {
      modal: true,
      desc: 'fake state for our modal'
    };
    history.pushState(modalState, null);
  }

  ngOnDestroy() {
    if (window.history.state.modal) {
      history.back();
    }
  }

  // Method of dismissing
  @HostListener('window:popstate', ['$event'])
  dismissModal() {
    this.modalCtrl.dismiss(this.Filter, 'cancel');
  }

  // Updates UI based on previous filter setting
  updateFilterUI() {
    if (this.Filter.datetime_min != undefined) {
      this.datetime_min = this.Filter.datetime_min.toISOString();
    } else {
      this.datetime_min = new Date("2015-01-02").toISOString();
    }

    if (this.Filter.datetime_max != undefined) {
      this.datetime_max = this.Filter.datetime_max.toISOString();
    } else {
      this.datetime_max = new Date().toISOString();
    }

    if (this.Filter.intensity_min != undefined) {
      this.intensity.lower = this.Filter.intensity_min;
    }

    if (this.Filter.intensity_max != undefined) {
      this.intensity.upper = this.Filter.intensity_max;
    }

    if (this.Filter.type == undefined) {
      this.type = 'nofilter';
    } else {
      this.type = this.Filter.type;
    }

    this.body_part = this.Filter.body_part;
    this.timesBefore_lower = this.Filter.timesBefore_lower;
    this.timesBefore_upper = this.Filter.timesBefore_upper;
  }

  // Updating Intensity dual knobs
  public onIntensityChange(newIntensity) {
    this.intensity.lower = newIntensity.lower;
    this.intensity.upper = newIntensity.upper;
  }

  // Resets current filter setting
  resetFilter() {
    this.datetime_min = new Date("2015-01-02").toISOString();
    this.datetime_max = new Date().toISOString();
    this.intensity = { lower: 0, upper: 10 };
    this.type = 'nofilter';
    this.body_part = undefined;
    this.timesBefore_lower = undefined;
    this.timesBefore_upper = undefined;
  }

  // Checking min date is before max date
  checkDate() {
    let minDate: Date = new Date(this.datetime_min);
    let maxDate: Date = new Date(this.datetime_max);

    if (minDate < maxDate) {
      return 1;
    } else {
      return 2;
    }
  }

  // Checking the max duration is bigger than min duration
  checkDuration() {
    if (this.timesBefore_upper == undefined || this.timesBefore_lower == undefined) {
      return 1;
    } else if (this.timesBefore_lower < this.timesBefore_upper) {
      return 1;
    } else {
      return 2;
    }
  }

  // function to save filter settings and passing to view-log page
  save() {
    if (this.checkDate() == 1 && this.checkDuration() == 1) {
      this.Filter.datetime_min = new Date(this.datetime_min);
      this.Filter.datetime_max = new Date(this.datetime_max);
      this.Filter.intensity_min = this.intensity.lower;
      this.Filter.intensity_max = this.intensity.upper;
      if (this.type == 'nofilter') {
        this.Filter.type = undefined;
      } else {
        this.Filter.type = this.type;
      }
      this.Filter.body_part = this.body_part;
      this.Filter.timesBefore_lower = this.timesBefore_lower;
      this.Filter.timesBefore_upper = this.timesBefore_upper;
      const newintensity = this.intensity;
      this.modalCtrl.dismiss(this.Filter, "submitted");
    } else if (this.checkDate() == 2) {
      this.alertCtrl.create({ header: "Warning!", message: "'From' date should be before 'To' date!", buttons: ['Close'] }).then((prompt) => {
        prompt.present();
      });
    } else if (this.checkDuration() == 2) {
      this.alertCtrl.create({ header: "Warning!", message: "Maximum number of occurence should be higher than minimum!", buttons: ['Close'] }).then((prompt) => {
        prompt.present();
      });
    }
  }
}
