import { Component, Input, OnInit } from '@angular/core';
import { ChartData, Color } from 'chart.js';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

  @Input('title') public title: string = '';
  @Input('data') public data: number[] = [];
  @Input('labels') public labels: string[] = [];
  @Input('colorsBg') public colorsBg: Color[] = ['#ccc','#eee','#aaa'];
  @Input('colorsHover') public colorsHover: Color[] = ['#ccc','#eee','#aaa'];
  @Input('colorsBorderHover') public colorsBorderHover: Color[] = ['#fff','#fff','#fff' ];
  public dataChart: ChartData<'doughnut'> = {
    datasets: []
  };


  constructor() { }

  ngOnInit(): void {

    console.table(this.colorsBg);

    this.dataChart = {
      labels: this.labels,
      datasets: [
        {
          data: this.data,
          backgroundColor: this.colorsBg,
          hoverBackgroundColor: this.colorsHover,
          hoverBorderColor: this.colorsBorderHover,
        },
      ]
    };

  }

}
