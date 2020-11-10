import { getLocaleNumberSymbol } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { element } from 'protractor';
import { LogDataService } from '../services/log-data.service';
import { MedicationDataService } from '../services/medication-data.service';

@Component({
  selector: 'app-insights-page',
  templateUrl: './insights-page.page.html',
  styleUrls: ['./insights-page.page.scss'],
})
export class InsightsPagePage implements OnInit {

  @ViewChild("intensityTimeCanvas") intensityTimeCanvas: ElementRef;
  @ViewChild("intensityFreqCanvas") intensityFreqCanvas: ElementRef;
  @ViewChild("durationFreqCanvas") durationFreqCanvas: ElementRef;
  @ViewChild("typePieCanvas") typePieCanvas: ElementRef;
  @ViewChild("mobilityPieCanvas") mobilityPieCanvas: ElementRef;
  @ViewChild("constantPieCanvas") constantPieCanvas: ElementRef;
  @ViewChild("redflagsFreqCanvas") redflagsFreqCanvas: ElementRef;
  @ViewChild("medicationUseCanvas") medicationUseCanvas: ElementRef;

  // Creating the Chart objects
  private intensityTimeChart: Chart;
  private intensityFreqChart: Chart;
  private durationFreqChart: Chart;
  private typePieChart: Chart;
  private mobilityPieChart: Chart;
  private constantPieChart: Chart;
  private redflagsFreqChart: Chart;
  private medicationUseChart: CharacterData;

  private logsToDisplay = [];
  private medsToDisplay = [];

  constructor(private dataService: LogDataService, private MedService: MedicationDataService) {
    this.logsToDisplay = this.dataService.getLogs();
    this.medsToDisplay = this.MedService.getMeds();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

    // if this.logsToDisplay is not sorted by datetime, we need to do .sort((a, b) => a.datetime - b.datetime)
    const intensity_time_data = this.logsToDisplay.map(log => {
      return {
        x: log.datetime,
        y: log.intensity,
      }
    });

    const medication_use_data = this.medsToDisplay.map(log => {
      return {
        x: log.datetime,
        y: log.intensity
      }
    })

    console.log(intensity_time_data);

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
              precision: 0,
            }
          }],
          xAxes: [{
            type: 'time',
            time: {
              unit: 'day'
            }
          }]
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
              precision: 0,
            }
          }]
        }
      }
    });

    this.durationFreqChart = new Chart(this.durationFreqCanvas.nativeElement, this.createHistogram("duration"));

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
      }
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

    const redflags_labels = ["Numbness", "Inability to walk", "Losing weight", "Losing bladder control"];
    const redflags_fd = { "Numbness": 0, "Inability to walk": 0, "Losing weight": 0, "Losing bladder control": 0 };
    this.logsToDisplay.forEach(element => {
      element.redflag_symptoms.forEach(symptom => {
        console.log(`symptom: ${symptom}`);
        redflags_fd[symptom] += 1;
      });
    });

    this.redflagsFreqChart = new Chart(this.redflagsFreqCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: redflags_labels,
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
              precision: 0,
            }
          }]
        }
      }
    })

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
      date: {
        labels: medication_labels,
        datasets: [
          {
            label: "# of Medication Uses",
            data: medication_labels.map(element => medication_fd[element]),
            backgroundColor: ['#FF0000', '#008080', '#00FF00', '#9932CC', '	#FFD700']
          }
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
    })

  }

  createFreqDist(myList, field?) {
    const freqDist = {};
    myList.forEach(element => {
      const item = field === undefined ? element : element[field];
      if (item in freqDist) {
        freqDist[item] += 1;
      } else {
        freqDist[item] = 1;
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

}
