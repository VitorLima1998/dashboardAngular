import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css'],
})
export class Card3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var options = {
      series: [
        {
          name: 'Net Profit',
          data: [45, 90, 70, 60, 70],
        },
      ],
      chart: {
        type: 'bar',
        height: 130,
        width: 160,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },

      fill: {
        opacity: 1,
        colors: ['#fdac60'],
      },
      tooltip: {},
    };

    var chart = new ApexCharts(document.querySelector('#columnchart'), options);
    chart.render();
  }
}
