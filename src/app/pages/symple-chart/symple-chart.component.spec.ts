import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SympleChartComponent } from './symple-chart.component';

describe('SympleChartComponent', () => {
  let component: SympleChartComponent;
  let fixture: ComponentFixture<SympleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SympleChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SympleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
