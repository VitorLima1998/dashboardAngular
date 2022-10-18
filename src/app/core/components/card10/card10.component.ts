import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card10',
  templateUrl: './card10.component.html',
  styleUrls: ['./card10.component.css'],
})
export class Card10Component implements OnInit {
  constructor() {}
  ngOnInit(): void {
    var options = {
      series: [83],
      chart: {
        height: 250,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '83%',
          },
        },
      },
      labels: ['83%'],
    };

    var chart = new ApexCharts(document.querySelector('#chartdonut'), options);
    chart.render();
  }
}
