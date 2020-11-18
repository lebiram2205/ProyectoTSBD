import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";//para comunicar con nuestra API REST
import { CuestionarioComponent } from "../components/cuestionario/cuestionario.component";
import{ Usuario} from "../models/usuario";
@Injectable({
  providedIn: 'root'
})
export class TestService {
  selectedUsuario:Usuario;
  usuario:Usuario[];
  readonly URL_API= 'http://localhost:3000/';
  constructor(private http:HttpClient) {
    this.selectedUsuario=new Usuario();
  }

  postTest(test:Usuario){
    console.log("pase por el contacto service")
    return this.http.post(this.URL_API,test);
  }
}
