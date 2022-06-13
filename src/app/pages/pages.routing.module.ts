import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainPageComponent } from './main-page/main-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProgressComponent } from './progress/progress.component';
import { SympleChartComponent } from './symple-chart/symple-chart.component';
import { LineChartsComponent } from './line-charts/line-charts.component';
import { BarChartsComponent } from './bar-charts/bar-charts.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
  },
  {
    path: 'progress',
    component: ProgressComponent,
  },
  {
    path: 'donut-charts',
    component: SympleChartComponent,
  },
  {
    path: 'line-charts',
    component: LineChartsComponent,
  },
  {
    path: 'bar-charts',
    component: BarChartsComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
