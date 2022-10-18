import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-card5',
  templateUrl: './card5.component.html',
  styleUrls: ['./card5.component.css'],
})
export class Card5Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var options = {
      series: [
        {
          name: 'Earning',
          data: [44, 55, 41, 67, 22, 43, 31],
        },
        {
          name: 'Expense',
          data: [13, 23, 20, 8, 13, 27, 50],
        },
      ],

      chart: {
        type: 'bar',
        height: 400,
        stacked: true,

        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },

      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          dataLabels: {
            total: {
              enabled: false,
              style: {
                fontSize: '13px',
                fontWeight: 900,
              },
            },
          },
        },
      },
      xaxis: {
        // type: 'datetime',
        categories: ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Aug'],
      },

      fill: {
        opacity: 1,
        colors: ['#e28f43', '#685fd8'],
      },
    };

    var chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();
  }
}
