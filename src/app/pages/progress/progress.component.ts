import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  public progress :number = 50;

  public getPercentProgress() : string {
    return this.progress + '%';
  }

  public changePercentProgress(value: number): void {
    if(value) {
      this.progress = parseInt(this.progress + '');
      if(this.progress >= 0 && this.progress <= 100 ) {
        this.progress = (this.progress + value);
        if(this.progress < 0 ) {
          this.progress = 0;
        }
        if(this.progress > 100 ) {
          this.progress = 100;
        }
      }
    }
  }
}
