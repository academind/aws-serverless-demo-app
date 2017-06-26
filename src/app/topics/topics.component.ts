import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

import { TopicsDataPoint } from './topics-data-point.model';
import { TopicsService } from './../topics.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  data: TopicsDataPoint[];
  chart: Chart;
  @ViewChild('chartArea') chartArea: ElementRef;

  constructor(private topicsService: TopicsService) { }

  ngOnInit() {
    this.topicsService.fetchData()
      .subscribe((data: TopicsDataPoint[]) => {
        this.data = data;
        this.chart = new Chart(this.chartArea.nativeElement, {
          type: 'bar',
          data: {
            labels: this.data.map((dataPoint: TopicsDataPoint) => dataPoint.title),
            datasets: [
              {
                label: '# of Votes',
                data: this.data.map((dataPoint: TopicsDataPoint) => dataPoint.value),
                backgroundColor: ['green', 'blue', 'lightblue', 'red', 'orange']
              }
            ]
          },
          options: {
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }
        })
      });
  }
}
