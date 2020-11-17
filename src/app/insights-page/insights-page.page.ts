import { getLocaleNumberSymbol } from '@angular/common';
import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { LogDataService, LogFilter } from '../services/log-data.service';
import { FilterModalPageComponent } from '../filter-modal/filter-modal.component';
import { ModalController } from '@ionic/angular';
import { element } from 'protractor';
import { MedicationDataService } from '../services/medication-data.service';

@Component({
  selector: 'app-insights-page',
  templateUrl: './insights-page.page.html',
  styleUrls: ['./insights-page.page.scss'],
})
export class InsightsPagePage implements OnInit {

  @ViewChild("intensityTimeCanvas") intensityTimeCanvas: ElementRef;
  @ViewChild("intensityFreqCanvas") intensityFreqCanvas: ElementRef;
  @ViewChild("typePieCanvas") typePieCanvas: ElementRef;
  @ViewChild("mobilityPieCanvas") mobilityPieCanvas: ElementRef;
  @ViewChild("constantPieCanvas") constantPieCanvas: ElementRef;
  @ViewChild("redflagsFreqCanvas") redflagsFreqCanvas: ElementRef;
  @ViewChild("medicationUseCanvas") medicationUseCanvas: ElementRef;
  @ViewChild('nightPainPieCanvas') nightPainPieCanvas: ElementRef;
  @ViewChild('worseBetterCanvas') worseBetterCanvas: ElementRef;



  // Creating the Chart objects
  private intensityTimeChart: Chart;
  private intensityFreqChart: Chart;
  private typePieChart: Chart;
  private mobilityPieChart: Chart;
  private constantPieChart: Chart;
  private redflagsFreqChart: Chart;
  private medicationUseChart: Chart;
  private nightPainPieChart: Chart;
  private worseBetterChart: Chart;


  private filter: LogFilter;
  private logsToDisplay = [];
  private medsToDisplay = [];

  constructor(private dataService: LogDataService, public modalCtrl: ModalController, private MedService: MedicationDataService) {
    this.logsToDisplay = this.dataService.getLogs();
    this.medsToDisplay = this.MedService.getMeds();
  }

  ngOnInit() {
    this.filter = this.dataService.createEmptyFilter();
  }

  ngAfterViewInit() {
    this.createCharts();
  }

  createCharts() {
    // if this.logsToDisplay is not sorted by datetime, we need to do .sort((a, b) => a.datetime - b.datetime)
    const intensity_time_data = this.logsToDisplay.map(log => {
      return {
        x: log.datetime,
        y: log.intensity,
      }
    });

    const medication_use_data = this.medsToDisplay.map(med => {
      return {
        x: med.datetime,
        y: med.intensity
      }
    })

    console.log(intensity_time_data);
    console.log(medication_use_data);

    this.intensityTimeChart = new Chart(this.intensityTimeCanvas.nativeElement, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Intensity',
          data: intensity_time_data,
          borderColor: 'rgb(38, 194, 129)',
        },
        {
          label: 'Medication Use',
          data: medication_use_data,
          borderColor: 'rgb(255, 204, 203)'
        }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 1,
            }
          }],
          xAxes: [{
            type: 'time',
            time: {
              unit: 'day'
            }
          }]
        },
        legend: {
          display: false
        }
      }
    });

    const intensity_fd = this.createFreqDist(this.logsToDisplay, "intensity");
    const intensity_labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    this.intensityFreqChart = new Chart(this.intensityFreqCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: intensity_labels,
        datasets: [
          {
            label: "# of Logs",
            data: intensity_labels.map(element => {
              return intensity_fd[element] || 0;
            }),
            backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
            borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
            borderWidth: 1
          },
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 1,
            }
          }]
        },
        legend: {
          display: false
        }
      }
    });

    const type_fd = this.createFreqDist(this.logsToDisplay, "type");
    const type_labels = ["none", "aching", "burning", "cramping", "numbness", "radiating", "shooting", "stabbing", "tingling"]

    this.typePieChart = new Chart(this.typePieCanvas.nativeElement, {
      type: "pie",
      data: {
        labels: type_labels,
        datasets: [
          {
            label: "# of Logs",
            data: type_labels.map(element => type_fd[element]),
            backgroundColor: ['rgb(38, 194, 129)', '#003f5c', '#2f4b7c', '#665191', 'a05195', '#d45087', '#f95d6a', '#ff7c43', '#ffa600'],
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
      }
    });


    const mobility_labels = ["moving", "resting", "moving and resting"];
    const mobility_fd = { "moving": 0, "resting": 0, "moving and resting": 0 };
    this.logsToDisplay.forEach(element => {
      if (element.mobility.length === 2) {
        mobility_fd["moving and resting"] += 1;
      } else {
        mobility_fd[element.mobility] += 1;
      }
    });

    this.mobilityPieChart = new Chart(this.mobilityPieCanvas.nativeElement, {
      type: "pie",
      data: {
        labels: mobility_labels,
        datasets: [
          {
            data: mobility_labels.map(element => mobility_fd[element]),
            backgroundColor: ['#003f5c', '#bc5090', '#ffa600'],
          }
        ]
      },
    });

    const constantData = [0, 0];
    this.logsToDisplay.forEach(element => {
      if (element.is_constant) {
        constantData[0] += 1;
      } else {
        constantData[1] += 1;
      }
    });

    this.constantPieChart = new Chart(this.constantPieCanvas.nativeElement, {
      type: "pie",
      data: {
        labels: ["constant", "intermittent"],
        datasets: [
          {
            data: constantData,
            backgroundColor: ['#003f5c', '#bc5090']
          }
        ]
      }
    });

    const redflags_labels = this.dataService.redflags;
    const redflags_shortlabels = ["weight loss", "resting pain", "incontinence", "limited motion range"]
    const redflags_fd = {};
    redflags_labels.forEach(redflag => {
      redflags_fd[redflag] = 0;
    })
    this.logsToDisplay.forEach(element => {
      element.redflag_symptoms.forEach(symptom => {
        redflags_fd[symptom] += 1;
      });
    });

    this.redflagsFreqChart = new Chart(this.redflagsFreqCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: redflags_shortlabels,
        datasets: [
          {
            label: '# of Logs',
            data: redflags_labels.map(element => redflags_fd[element]),
            backgroundColor: ['#003f5c', '#7a5195', '#ef5675', '#ffa600'],
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 1,
            }
          }],
          // xAxes: [{
          //   labelWrap: 100
          // }]
        },
        legend: {
          display: true,
        }
      }
    });



    const nightData = [0, 0];
    this.logsToDisplay.forEach(element => {
      if (element.nightPain) {
        nightData[0] += 1;
      } else {
        nightData[1] += 1;
      }
    });

    this.nightPainPieChart = new Chart(this.nightPainPieCanvas.nativeElement, {
      type: "pie",
      data: {
        labels: ["No", "Yes"],
        datasets: [
          {
            data: nightData,
            backgroundColor: ['#003f5c', '#bc5090']
          }
        ]
      }
    });

    const worse_fd = this.createFreqDist(this.logsToDisplay, "worse", true);
    const better_fd = this.createFreqDist(this.logsToDisplay, "better", true);
    const worse_better_labels = this.dataService.activities;

    console.log(worse_better_labels.map(element => {
      return worse_fd[element] || 0;
    }))

    this.worseBetterChart = new Chart(this.worseBetterCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: worse_better_labels,
        datasets: [
          {
            label: "worse",
            data: worse_better_labels.map(element => {
              return worse_fd[element] || 0;
            }),
            // fillColor: "blue",
            backgroundColor: '#003f5c', // array should have same number of elements as number of dataset
            // borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
            // borderWidth: 1
          },
          {
            label: "better",
            data: worse_better_labels.map(element => {
              return better_fd[element] || 0;
            }),
            // fillColor: "red",
            backgroundColor: '#bc5090', // array should have same number of elements as number of dataset
            // borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
            // borderWidth: 1
          },
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              precision: 0,
            }
          }]
        }
      }
    });





    const medication_fd = { "NSAID": 0, "Acetaminiophen": 0, "COX-2 Inhibitors": 0, "Antidepressants": 0, "Anti-Seizure": 0 };
    const medication_labels = ["NSAID", "Acetaminiophen", "COX-2 Inhibitors", "Antidepressants", "Anti-Seizure"]
    this.medsToDisplay.forEach(element => {
      element.med_type.forEach(med_type => {
        console.log(`Medication: ${med_type}`);
        medication_fd[med_type] += 1;
      });
    });

    this.medicationUseChart = new Chart(this.medicationUseCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: medication_labels,
        datasets: [
          {
            label: "# of Medication Uses",
            data: medication_labels.map(element => medication_fd[element]),
            backgroundColor: ['#003f5c', '#2f4b7c', '#665191', '#d45087', '#f95d6a']
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 1,
            }
          }]
        }
      }
    })
  }

  createFreqDist(myList, field?, is_list?) {
    const freqDist = {};
    myList.forEach(element => {
      const item = field === undefined ? element : element[field];
      if (is_list) {
        item.forEach(listItem => {
          if (listItem in freqDist) {
            freqDist[listItem] += 1;
          } else {
            freqDist[listItem] = 1;
          }
        });
      } else {
        if (item in freqDist) {
          freqDist[item] += 1;
        } else {
          freqDist[item] = 1;
        }
      }
    });
    return freqDist;
  }

  createHistogram(field) {
    // from https://jsfiddle.net/s8qas3km/17/
    // which primarily comes from https://github.com/jrideout/histogram-pretty/blob/master/histogram-pretty.js
    const histogram = (vector, options?) => {

      options = options || {};
      options.copy = options.copy === undefined ? true : options.copy;
      options.pretty = options.pretty === undefined ? true : options.pretty;

      var s = vector;
      if (options.copy) s = s.slice();
      s.sort(function (a, b) { return a - b; });

      // TODO: use http://www.austinrochford.com/posts/2013-10-28-median-of-medians.html
      // without sorting
      function quantile(p) {
        var idx = 1 + (s.length - 1) * p,
          lo = Math.floor(idx),
          hi = Math.ceil(idx),
          h = idx - lo;
        return (1 - h) * s[lo] + h * s[hi];
      }

      function freedmanDiaconis() {
        var iqr = quantile(0.75) - quantile(0.25);
        return 2 * iqr * Math.pow(s.length, -1 / 3);
      }

      function pretty(x) {
        var scale = Math.pow(10, Math.floor(Math.log(x / 10) / Math.LN10)),
          err = 10 / x * scale;
        if (err <= 0.15) scale *= 10;
        else if (err <= 0.35) scale *= 5;
        else if (err <= 0.75) scale *= 2;
        return scale * 10;
      }

      var h = freedmanDiaconis();
      if (options.pretty) h = pretty(h);

      function bucket(d) {
        return h * Math.floor(d / h);
      }

      function tickRange(n?) {
        var extent = [bucket(s[0]), h + bucket(s[s.length - 1])],
          buckets = Math.round((extent[1] - extent[0]) / h),
          step = buckets > n ? Math.round(buckets / n) : 1,
          pad = buckets % step; // to center whole step markings
        return [extent[0] + h * Math.floor(pad / 2),
        extent[1] - h * Math.ceil(pad / 2) + h * 0.5, // pad upper extent for d3.range
        h * step];
      }

      return {
        size: h,
        fun: bucket,
        tickRange: tickRange
      };
    };

    const range = (start, end, step = 1) => {
      const len = Math.floor((end - start) / step) + 1
      return Array(len).fill(0).map((_, idx) => start + (idx * step))  // not sure the fill(0) is needed
    }


    const data = this.logsToDisplay.map(element => element[field]);
    const hist = histogram(data);
    const binRange = hist.tickRange();
    const labels = range(binRange[0], Math.round(binRange[1]), binRange[2]);
    const bins = Array(labels.length).fill(0);

    let value;
    let index;
    for (let i = 0; i < data.length; i++) {
      value = data[i];
      index = labels.indexOf(hist.fun(value));
      bins[index] += 1;
    }

    return {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "# of Logs",
          data: bins,
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1,
          barPercentage: 1.0,
          categoryPercentage: 1.0,
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              precision: 0,
            }
          }]
        }
      }
    };
  }

  // this method creates a modal which is a dialog that appears on top of app's content this will be used as a way of setting filter and passing data
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: FilterModalPageComponent,
      backdropDismiss: false,
      componentProps: {
        Filter: this.filter
      }
    });
    await modal.present();

    modal.onWillDismiss().then(dataReturned => {
      if (dataReturned !== null) {
        this.filter = dataReturned.data;
        this.filterLogs();
      }
    })
  }

  filterLogs() {
    this.logsToDisplay = this.dataService.getLogsWithFilter(this.filter);
    this.createCharts();
  }
}
