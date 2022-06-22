import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routes
import { AppRoutingModule } from '../app-routing.module';
// Modules
import { SharedModule } from '../shared/shared.module';
// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProgressComponent } from './progress/progress.component';
import { SympleChartComponent } from './symple-chart/symple-chart.component';
import { LineChartsComponent } from './line-charts/line-charts.component';
import { BarChartsComponent } from './bar-charts/bar-charts.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    MainPageComponent,
    DashboardComponent,
    UserProfileComponent,
    ProgressComponent,
    SympleChartComponent,
    LineChartsComponent,
    BarChartsComponent,
    AcountSettingsComponent,
    PagesComponent,
  ],
  exports: [
    MainPageComponent,
    DashboardComponent,
    UserProfileComponent,
    ProgressComponent,
    SympleChartComponent,
    AcountSettingsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
