import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.scss']
})
export class IncrementerComponent{

  @Input() public progress: number = 50;
  @Input() public btnClass: string = 'btn-primary';

  @Output() public changePercent: EventEmitter<number> = new EventEmitter();

  public invalid = false;

  public onChange( value: number ) {
    if(value >= 100) {
      this.invalid = true;
      this.progress = 100;
    } else if(value <= 0) {
      this.progress = 0;
      this.invalid = true;
    } else {
      this.progress = value;
      this.invalid = false;
    }
    this.changePercent.emit(this.progress);
  }

  public changePercentProgress(value: number): void {
    if(value) {
      this.progress = parseInt(this.progress + '');
      if(this.progress >= 0 && this.progress <= 100 ) {
        this.progress = (this.progress + value);
        this.invalid = false;
        this.changePercent.emit(this.progress);
        if(this.progress < 0 ) {
          this.progress = 0;
          this.changePercent.emit(0)
        }
        if(this.progress > 100 ) {
          this.progress = 100;
          this.changePercent.emit(100)
        }
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
