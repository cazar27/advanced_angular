import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './content/not-found/not-found.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthMainComponent } from './auth/auth-main/auth-main.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./pages/pages.routing.module').then(m => m.PagesRoutingModule)
  },
  {
    path: 'auth',
    component: AuthMainComponent,
    loadChildren: () => import('./auth/auth.routing.module').then(m => m.AuthRoutingModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
