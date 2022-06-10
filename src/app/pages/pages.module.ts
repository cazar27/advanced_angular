import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routes
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
// Modules
import { SharedModule } from '../shared/shared.module';
// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProgressComponent } from './progress/progress.component';
import { SympleChartComponent } from './symple-chart/symple-chart.component';

@NgModule({
  declarations: [
    MainPageComponent,
    DashboardComponent,
    UserProfileComponent,
    ProgressComponent,
    SympleChartComponent
  ],
  exports: [
    MainPageComponent,
    DashboardComponent,
    UserProfileComponent,
    ProgressComponent,
    SympleChartComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class PagesModule { }
