import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import{KlassenDetailsComponent} from './klassen-details/klassen-details.component';
import{FachDetailsComponent} from './fach-details/fach-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RegisterComponent} from './register/register.component';


@NgModule({
  declarations: [AppComponent,DashboardComponent, KlassenDetailsComponent,FachDetailsComponent,RegisterComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
