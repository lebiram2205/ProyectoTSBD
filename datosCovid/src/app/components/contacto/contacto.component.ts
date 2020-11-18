import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Contacto } from "src/app/models/Contacto";
import Swal from 'sweetalert2';
import { ContactoService } from "../../services/contacto.service";
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers:[ContactoService]
})
export class ContactoComponent implements OnInit {
  form: FormGroup;
  contactoServiceU : ContactoService;
  constructor(private formBuilder:FormBuilder,private contactoService:ContactoService) {
    this.buildForm();
    this.contactoServiceU = contactoService ;
    
   }
   ngOnInit(): void {
  }
  private buildForm() {
   this.form = this.formBuilder.group({
    nombre: ['',  [Validators.required]],
    sexo: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    comentario: ['', [Validators.required, Validators.maxLength(400)]]
  });
}
save(event: Event) {
  //event.preventDefault();//cancelo su comportamiento por defecto y evito que haga una recarga de la pagina 
  if(this.form.valid){
    const value = this.form.value;
    this.contactoServiceU.postContacto(this.form.value).subscribe(
      Response=>console.log(Response),
      err=>console.log(err)
     );
    // Swal.fire({
    //   title: 'Atencion',
    //   text: "Es posible que tenga COVID",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    // })  
  }

}
 

}