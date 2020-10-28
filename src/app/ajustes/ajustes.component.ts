import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import { ApiSecretosService } from '../api-secretos.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent implements OnInit {
  modificarPass; 
  modificarDatos ; 

  constructor(private formBuilder: FormBuilder,
               private service: ApiSecretosService) { }

 ngOnInit(): void {
    this.service.getUsuarioDatos().subscribe( datos => {
       const nombre = datos.__data__.nombre; 
       const correo = datos.__data__.correo ; 
        this.createForm(nombre, correo);
    })

  }


  createForm(_nombre:string, _correo:string): void{
        this.modificarDatos =  this.formBuilder.group({
          nombre : _nombre ,
          correo : _correo
        })
        
      this.modificarPass =  this.formBuilder.group({
          claveAnterior: '',
          claveNueva : ''
        })
  }

  onSubmitDatos(datos):void{
     console.log(datos)
     this.service.updateUsuarioDatos(datos).subscribe( callback => {
          console.log(callback);
     })
  }
  onSubmitPass(datos):void{
      this.service.updatePassword(datos).subscribe( callback => {
           if(callback.status_code == 400){
                alert("La clave no escorrecta.");
           } else {
               alert("Sea cambiado la contraseña.")
               this.modificarPass.reset();
           }
      })
  }
}