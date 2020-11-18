import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";//para comunicar con nuestra API REST
import { ChartsComponent } from "../components/charts/charts.component";
@Injectable({
  providedIn: 'root'
})

export class ChartService {
  readonly URL_API= 'http://localhost:3000';

  constructor(private http:HttpClient) { }
  

  getcasosPositivosEF(){
      return this.http.get(this.URL_API +'/casosPositivosEF');
  }

  getcasosPositivosMEF(){
      return this.http.get(this.URL_API +'/casosPositivosMEF');
  }
  getcasosPositivosHEF(){
      return this.http.get(this.URL_API +'/casosPositivosHEF');
  }
  getdefuncionesEF(){
      return this.http.get(this.URL_API +'/defuncionesEF');
  }
  getdefuncionesMEF(){
      return this.http.get(this.URL_API +'/defuncionesMEF');
  }
  getdefuncionesHEF(){
      return this.http.get(this.URL_API +'/defuncionesHEF');
  }






}
