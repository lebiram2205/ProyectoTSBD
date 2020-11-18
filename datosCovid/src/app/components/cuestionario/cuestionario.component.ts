import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { TestService } from "../../services/test.service";

import Swal from 'sweetalert2';
@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css'],
  providers:[TestService]
})
export class CuestionarioComponent implements OnInit {
  form: FormGroup;// la variable con la que yo estoy trabajando para mi formulario
  testServiceU : TestService;
  constructor(private formBuilder:FormBuilder, private contactoService: TestService) { 
    this.buildForm();
    this. testServiceU = contactoService ;
  }

  ngOnInit(): void {
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      residencia: ['', [Validators.required]],
      pregunta1: ['', [Validators.required]],
      pregunta2: ['', [Validators.required]],
      pregunta3: ['', [Validators.required]],
      pregunta4: ['', [Validators.required]],
      pregunta5: ['', [Validators.required]],
      pregunta6: ['', [Validators.required]],
      pregunta7: ['', [Validators.required]],
      pregunta8: ['', [Validators.required]],
      pregunta9: ['', [Validators.required]],
      pregunta10: ['', [Validators.required]]
    });

    // this.form.valueChanges
    // .subscribe(value => {
    //   console.log(value);
    // });
    
  }
  save(event: Event) {
    //event.preventDefault();//cancelo su comportamiento por defecto y evito que haga una recarga de la pagina 
    if(this.form.valid){
      const value = this.form.value;
      this. testServiceU.postTest(this.form.value).subscribe(
        Response=>console.log(Response),
        err=>console.log(err)
       );


      
      // console.log(value);
      // console.log(value.pregunta1);
      // if(value.pregunta1=="si")
      // Swal.fire({
      //             position: 'top-end',
      //             icon: 'success',
      //             title: 'Es posible que tenga COVID',
      //             showConfirmButton: true
      //           })
      Swal.fire({
        title: 'Atencion',
        text: "Es posible que tenga COVID",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
  

      })  


    }
 
  }

}
// this.employeeS.postEmployee(form.value)
//       .subscribe(res=>{
  
//         this.resetForm(form);
//         Swal.fire({
//           position: 'top-end',
//           icon: 'success',
//           title: 'Empleado Guardado',
//           showConfirmButton: false,
//           timer: 3000
//         })
//         this.getEmployees();//cuando guardamos un dato nos devolvera el dato actualizado
//       })
//     }}