import { getLocaleNumberSymbol } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { LogDataService } from '../services/log-data.service';

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

  private intensityTimeChart: Chart;
  private intensityFreqChart: Chart;
  private durationFreqChart: Chart;
  private typePieChart: Chart;
  private mobilityPieChart: Chart;
  private constantPieChart: Chart;
  private redflagsFreqChart: Chart;

  private logsToDisplay = [];

  constructor(public dataService: LogDataService) {
    this.logsToDisplay = this.dataService.getLogs();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

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

    const data = this.logsToDisplay.map(element => element.duration);
    const durationHist = this.histogram(data);
    const durationBinRange = durationHist.tickRange();  // shouldn't there be an n?
    const durationLabels = this.range(durationBinRange[0], Math.round(durationBinRange[1]), durationBinRange[2]);
    const durationBins = Array(durationLabels.length).fill(0);

    let value;
    let index;
    for (let i = 0; i < data.length; i++) {
      value = data[i];
      index = durationLabels.indexOf(durationHist.fun(value));
      durationBins[index] += 1;
    }

    console.log(durationLabels);
    console.log(durationBins);

    this.durationFreqChart = new Chart(this.durationFreqCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: durationLabels,
        datasets: [{
          label: "# of Logs",
          data: durationBins,
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1,
        }]
      },
      options: {
        scales: {
          xAxes: [{
            categoryPercentage: 1.0,
            barPercentage: 1.0,
          }],
          yAxes: [{
            ticks: {
              precision: 0,
            }
          }]
        }
      }
    });

    // this.barChart = new Chart(this.barCanvas.nativeElement, {
    //   type: "bar",
    //   data: {
    //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //     datasets: [
    //       {
    //         label: "# of Votes",
    //         data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: [
    //           "rgba(255, 99, 132, 0.2)",
    //           "rgba(54, 162, 235, 0.2)",
    //           "rgba(255, 206, 86, 0.2)",
    //           "rgba(75, 192, 192, 0.2)",
    //           "rgba(153, 102, 255, 0.2)",
    //           "rgba(255, 159, 64, 0.2)"
    //         ],
    //         borderColor: [
    //           "rgba(255,99,132,1)",
    //           "rgba(54, 162, 235, 1)",
    //           "rgba(255, 206, 86, 1)",
    //           "rgba(75, 192, 192, 1)",
    //           "rgba(153, 102, 255, 1)",
    //           "rgba(255, 159, 64, 1)"
    //         ],
    //         borderWidth: 1
    //       }
    //     ]
    //   },
    //   options: {
    //     scales: {
    //       yAxes: [
    //         {
    //           ticks: {
    //             beginAtZero: true
    //           }
    //         }
    //       ]
    //     }
    //   }
    // });

    // this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
    //   type: "doughnut",
    //   data: {
    //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //     datasets: [
    //       {
    //         label: "# of Votes",
    //         data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: [
    //           "rgba(255, 99, 132, 0.2)",
    //           "rgba(54, 162, 235, 0.2)",
    //           "rgba(255, 206, 86, 0.2)",
    //           "rgba(75, 192, 192, 0.2)",
    //           "rgba(153, 102, 255, 0.2)",
    //           "rgba(255, 159, 64, 0.2)"
    //         ],
    //         hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
    //       }
    //     ]
    //   }
    // });

    // this.lineChart = new Chart(this.lineCanvas.nativeElement, {
    //   type: "line",
    //   data: {
    //     labels: ["January", "February", "March", "April", "May", "June", "July"],
    //     datasets: [
    //       {
    //         label: "My First dataset",
    //         fill: false,
    //         lineTension: 0.1,
    //         backgroundColor: "rgba(75,192,192,0.4)",
    //         borderColor: "rgba(75,192,192,1)",
    //         borderCapStyle: "butt",
    //         borderDash: [],
    //         borderDashOffset: 0.0,
    //         borderJoinStyle: "miter",
    //         pointBorderColor: "rgba(75,192,192,1)",
    //         pointBackgroundColor: "#fff",
    //         pointBorderWidth: 1,
    //         pointHoverRadius: 5,
    //         pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //         pointHoverBorderColor: "rgba(220,220,220,1)",
    //         pointHoverBorderWidth: 2,
    //         pointRadius: 1,
    //         pointHitRadius: 10,
    //         data: [65, 59, 80, 81, 56, 55, 40],
    //         spanGaps: false
    //       }
    //     ]
    //   }
    // });
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

  // from https://github.com/jrideout/histogram-pretty/blob/master/histogram-pretty.js
  histogram(vector, options?) {

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

  range(start, end, step = 1) {
    const len = Math.floor((end - start) / step) + 1
    return Array(len).fill(0).map((_, idx) => start + (idx * step))  // not sure the fill(0) is needed
  }

}
