import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card6',
  templateUrl: './card6.component.html',
  styleUrls: ['./card6.component.css'],
})
export class Card6Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var options = {
      series: [53],
      chart: {
        height: 200,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '53%',
          },
        },
      },
      labels: ['53%'],
      colors: ['#28c76f'],
    };

    var chart = new ApexCharts(document.querySelector('#donutchart'), options);
    chart.render();
  }
}
