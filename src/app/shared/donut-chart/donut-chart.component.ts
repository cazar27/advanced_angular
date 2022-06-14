import { Component, Input, OnInit } from '@angular/core';
import { ChartData, Color } from 'chart.js';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

  @Input('title') public title: string = 'Title';
  @Input('data') public data: number[] = [ 250, 150, 500 ];
  @Input('labels') public labels: string[] = [ 'Label 1', 'Label 2', 'Label 3' ];
  @Input('colorsBg') public colorsBg: Color[] = ['#ccc','#eee','#aaa'];
  @Input('colorsHover') public colorsHover: Color[] = ['#ccc','#eee','#aaa'];
  @Input('colorsBorderHover') public colorsBorderHover: Color[] = ['#fff','#fff','#fff' ];
  public dataChart: ChartData<'doughnut'> = {
    datasets: []
  };

  ngOnInit(): void {

    if(this.data.length > 0) {
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

}
