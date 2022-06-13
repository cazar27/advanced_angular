import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  public progress1 :number = 35;
  public progress2 :number = 85;

  public getPercentProgress(value: number) : string {
    return value + '%';
  }

}
