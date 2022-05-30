import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routes
import { AppRoutingModule } from '../app-routing.module';
// Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthMainComponent } from './auth-main/auth-main.component';

@NgModule({
  declarations: [
    AuthMainComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    AuthMainComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AuthModule { }
