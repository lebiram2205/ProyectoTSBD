import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/headers/headers.component';
import { ChartsComponent } from './components/charts/charts.component';


import {HttpClientModule} from '@angular/common/http';
//Rutas
import {APP_ROUTING} from './app.routes';
// Graficos
import { ChartsModule } from "ng2-charts";

import{ FormsModule} from '@angular/forms';
import{ ReactiveFormsModule} from '@angular/forms';

import { ChartService } from "./services/chart.service";
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { ContactoComponent } from './components/contacto/contacto.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    ChartsComponent,
    CuestionarioComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    HttpClientModule,
    ChartsModule,
    SweetAlert2Module
  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
