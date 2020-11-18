import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";//para comunicar con nuestra API REST
import { ContactoComponent } from "../components/contacto/contacto.component";
// import{ Usuario} from "../models/usuario";
import{ Contacto} from "../models/Contacto";
@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  // selectedUsuario:Usuario;
  selectedContacto:Contacto;
  // usuario:Usuario[];
  contacto:Contacto[];
  readonly URL_API= 'http://localhost:3000/';

  constructor(private http:HttpClient) { 
    // this.selectedUsuario=new Usuario();
    this.selectedContacto=new Contacto();
  }
  
  // postTest(test:Usuario){
  //     console.log("pase por el contacto service")
  //     return this.http.post(this.URL_API,test);
  //   }

  postContacto(contacto:Contacto){
    console.log(contacto)
    return this.http.post(this.URL_API+'contacto',contacto);
  }
  getContacto(){
    return this.http.get(this.URL_API+'contacto');
  }

}
