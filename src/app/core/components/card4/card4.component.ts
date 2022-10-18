import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-card4',
  templateUrl: './card4.component.html',
  styleUrls: ['./card4.component.css'],
})
export class Card4Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var options = {
      series: [
        {
          name: 'Desktops',
          data: [10, 40, 25, 50, 20, 60],
        },
      ],
      chart: {
        height: 130,
        width: 170,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },

      grid: {
        row: {
          colors: ['transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
    };

    var chart = new ApexCharts(document.querySelector('#linechart'), options);
    chart.render();
  }
}
