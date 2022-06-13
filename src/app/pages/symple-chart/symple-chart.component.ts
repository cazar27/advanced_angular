import { Component } from '@angular/core';
import { ChartData, Color } from 'chart.js';

@Component({
  selector: 'app-symple-chart',
  templateUrl: './symple-chart.component.html',
  styleUrls: ['./symple-chart.component.scss']
})
export class SympleChartComponent {

  public title1: string = 'Sales Chart';
  public data1: number[] = [ 250, 150, 500 ];
  public labels1: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public colorsBg1: Color[] = ['#745af2','#398bf7','#26c6da'];
  public colorsHover1: Color[] = ['#745af2','#398bf7','#26c6da'];
  public colorsBorderHover1: Color[] = ['#fff','#fff','#fff'];

  public title2: string = 'Sales Chart';
  public data2: number[] = [ 350, 300, 200 ];
  public labels2: string[] = [ 'Label 1', 'Label 2', 'Label 3' ];
  public colorsBg2: Color[] = ['#ef5350','#ffb22b','#06d79c'];
  public colorsHover2: Color[] = ['#ef5350','#ffb22b','#06d79c'];
  public colorsBorderHover2: Color[] = ['#fff','#fff','#fff'];

}
