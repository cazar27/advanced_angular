import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.scss']
})
export class BarChartsComponent {

  public title1: string = 'Sales Chart';
  public labels1: string[] = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ];
  public dataset1: any[] = [
    { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A',backgroundColor: '#ef5350' },
    { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B',backgroundColor: '#398bf7' }
  ];

  public title2: string = 'Rent Chart';
  public labels2: string[] = [ 'Label 1', 'Label 2', 'Label 3' ];
  public dataset2: any[] = [
    { data: [ 65, 59, 80 ], label: 'Total',backgroundColor: '#745af2' },
    { data: [ 28, 48, 40 ], label: 'Total',backgroundColor: '#398bf7' }
  ];
}
