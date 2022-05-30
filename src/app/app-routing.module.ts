import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { SympleChartComponent } from './pages/symple-chart/symple-chart.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { AuthMainComponent } from './auth/auth-main.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
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
        path: 'simply-chart',
        component: SympleChartComponent,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
    ]
  },

  {
    path: '',
    component: AuthMainComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
