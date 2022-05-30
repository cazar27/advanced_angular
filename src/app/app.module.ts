import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Routes
import { AppRoutingModule } from './app-routing.module';
//Module
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
//Components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
