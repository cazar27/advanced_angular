import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @Input('title') public title: string = 'Title chart';
  @Input('labels') public labels: string[] = [];
  @Input('datasets') public data: any[] = [];

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
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
    ],
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
  };

  ngOnInit(): void {
    console.table(this.data.length);

    if(this.data.length > 0) {
      this.lineChartData = {
        datasets: this.data,
        labels: this.labels
      };
    }
  }

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
          ticks: {
            color: '#455a64'
          }
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          //color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: '#455a64'
        }
      }
    },

    plugins: {
      legend: { display: true },
    }
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //console.log(event, active);
  }


}
