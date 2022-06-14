import { Component } from '@angular/core';

@Component({
  selector: 'app-line-charts',
  templateUrl: './line-charts.component.html',
  styleUrls: ['./line-charts.component.scss']
})
export class LineChartsComponent {

  public title1: string = 'Sales Chart';
  public labels1: string[] = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ];
  public dataset1: any[] = [
    {
      data: [ 65, 59, 80, 81, 56, 55, 40 ],
      label: 'Series A',
      backgroundColor: 'rgba(6, 215, 156,0.2)',
      borderColor: 'rgba(6, 215, 156,1)',
      pointBackgroundColor: 'rgba(6, 215, 156,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(6, 215, 156,0.8)',
      fill: 'origin',
    },
    {
      data: [ 28, 48, 40, 19, 86, 27, 90 ],
      label: 'Series B',
      backgroundColor: 'rgba(57, 139, 247,0.2)',
      borderColor: 'rgba(57, 139, 247,1)',
      pointBackgroundColor: 'rgba(57, 139, 247,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(57, 139, 247,1)',
      fill: 'origin',
    },
    {
      data: [ 180, 480, 770, 90, 1000, 270, 400 ],
      label: 'Series C',
      yAxisID: 'y-axis-1',
      backgroundColor: 'rgba(255, 178, 43,0.3)',
      borderColor: 'rgba(255, 178, 43,1)',
      pointBackgroundColor: 'rgba(255, 178, 43,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 178, 43,0.8)',
      fill: 'origin',
    }
  ];

  public title2: string = 'Rent Chart';
  public labels2: string[] = [ '6', '7', '8','9', '10', '11' ];
  public dataset2: any[] = [
    {
      data: [ 0, 70, 180, 150, 210, 155, 250 ],
      label: 'Series A',
      backgroundColor: 'rgba(6, 215, 156,0.2)',
      borderColor: 'rgba(6, 215, 156,1)',
      pointBackgroundColor: 'rgba(6, 215, 156,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(6, 215, 156,0.8)',
      fill: 'origin',
    },
    {
      data: [ 0, 40, 40, 50, 186, 127, 190 ],
      label: 'Series B',
      backgroundColor: 'rgba(57, 139, 247,0.2)',
      borderColor: 'rgba(57, 139, 247,1)',
      pointBackgroundColor: 'rgba(57, 139, 247,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(57, 139, 247,1)',
      fill: 'origin',
    },
    {
      data: [ 0, 30, 20, 10, 45, 85, 120 ],
      label: 'Series C',
      yAxisID: 'y-axis-1',
      backgroundColor: 'rgba(255, 178, 43,0.3)',
      borderColor: 'rgba(255, 178, 43,1)',
      pointBackgroundColor: 'rgba(255, 178, 43,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 178, 43,0.8)',
      fill: 'origin',
    }
  ];

}
